(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasAnime = typeof window.anime === "function";
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    root.classList.add("js");

    const progress = $(".scroll-progress");
    const navbar = $(".navbar");
    const timeline = $(".timeline");

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateScrollState = () => {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const ratio = clamp(window.scrollY / maxScroll, 0, 1);

        root.style.setProperty("--scroll", ratio.toFixed(4));

        if (progress) {
            progress.style.transform = `scaleX(${ratio})`;
        }

        if (navbar) {
            navbar.classList.toggle("is-scrolled", window.scrollY > 18);
        }

        if (timeline) {
            const rect = timeline.getBoundingClientRect();
            const visible = clamp((window.innerHeight * 0.78 - rect.top) / Math.max(rect.height, 1), 0, 1);
            timeline.style.setProperty("--timeline-progress", visible.toFixed(4));
        }
    };

    let ticking = false;
    const requestScrollUpdate = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateScrollState();
            ticking = false;
        });
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    updateScrollState();

    window.addEventListener("pointermove", (event) => {
        root.style.setProperty("--mx", `${event.clientX}px`);
        root.style.setProperty("--my", `${event.clientY}px`);
    }, { passive: true });

    const name = $(".name");
    if (name && !name.dataset.kinetic) {
        const label = name.textContent.trim();
        name.dataset.kinetic = "true";
        name.setAttribute("aria-label", label);
        name.innerHTML = label.split("").map((char) => {
            const content = char === " " ? "&nbsp;" : char;
            return `<span class="char" aria-hidden="true">${content}</span>`;
        }).join("");
    }

    const revealTargets = [
        ".section-title",
        ".glass-card",
        ".skill-category",
        ".timeline-item",
        ".contact-text",
        ".social-icon",
    ];

    $$(revealTargets.join(",")).forEach((node) => node.classList.add("reveal-target"));

    if (reduceMotion || !hasAnime) {
        $$(".reveal-target").forEach((node) => {
            node.classList.add("is-revealed");
            node.style.opacity = "1";
        });
        return;
    }

    const heroTimeline = window.anime.timeline({
        easing: "easeOutExpo",
        duration: 900,
    });

    heroTimeline
        .add({
            targets: ".greeting",
            translateY: [24, 0],
            opacity: [0, 1],
            duration: 650,
        })
        .add({
            targets: ".name .char",
            translateY: [90, 0],
            rotateX: [80, 0],
            opacity: [0, 1],
            delay: window.anime.stagger(34),
            duration: 1050,
        }, "-=360")
        .add({
            targets: ".title",
            translateY: [36, 0],
            opacity: [0, 1],
            duration: 820,
        }, "-=760")
        .add({
            targets: [".hero-details", ".summary", ".cta-group"],
            translateY: [28, 0],
            opacity: [0, 1],
            delay: window.anime.stagger(90),
            duration: 760,
        }, "-=520")
        .add({
            targets: ".ambient-grid .draw-line",
            strokeDashoffset: [1, 0],
            duration: 1800,
            delay: window.anime.stagger(90),
            easing: "easeInOutSine",
        }, "-=960");

    window.anime({
        targets: ".ambient-grid",
        translateY: [-10, 18],
        rotate: [-1.5, 1.5],
        direction: "alternate",
        easing: "easeInOutSine",
        duration: 6200,
        loop: true,
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const node = entry.target;
            node.classList.add("is-revealed");

            window.anime({
                targets: node,
                translateY: [72, 0],
                rotateX: [8, 0],
                scale: [0.985, 1],
                opacity: [0, 1],
                duration: node.classList.contains("section-title") ? 680 : 920,
                easing: "easeOutExpo",
            });

            if (node.classList.contains("skill-category")) {
                window.anime({
                    targets: $$(".tag", node),
                    translateY: [22, 0],
                    opacity: [0, 1],
                    delay: window.anime.stagger(34),
                    duration: 620,
                    easing: "easeOutCubic",
                });
            }

            observer.unobserve(node);
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
    });

    $$(".reveal-target").forEach((node) => observer.observe(node));

    $$(".glass-card, .skill-category").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--card-x", `${x}%`);
            card.style.setProperty("--card-y", `${y}%`);
        }, { passive: true });
    });

    $$(".btn, .social-icon").forEach((item) => {
        item.addEventListener("pointermove", (event) => {
            const rect = item.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
            window.anime.remove(item);
            window.anime({
                targets: item,
                translateX: x,
                translateY: y,
                scale: 1.025,
                duration: 320,
                easing: "easeOutExpo",
            });
        }, { passive: true });

        item.addEventListener("pointerleave", () => {
            window.anime.remove(item);
            window.anime({
                targets: item,
                translateX: 0,
                translateY: 0,
                scale: 1,
                duration: 520,
                easing: "easeOutElastic(1, .55)",
            });
        });
    });
})();
