/**
 * ==========================================================
 * IY Finance Solutions
 * Animations
 * Version: 1.0
 * ==========================================================
 */

"use strict";

const Animations = {

    init() {

        this.revealObserver();

        this.counterObserver();

        this.parallaxHero();

        this.buttonRipple();

        this.floatingCards();

        this.cardHoverTilt();

    },

    /* ======================================================
       Reveal On Scroll
    ====================================================== */

    revealObserver() {

        const elements = document.querySelectorAll(".reveal");

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15,

            rootMargin: "0px 0px -50px 0px"

        });

        elements.forEach(el => observer.observe(el));

    },

    /* ======================================================
       Animated Counters
    ====================================================== */

    counterObserver() {

        const counters = document.querySelectorAll("[data-counter]");

        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                this.animateCounter(entry.target);

                observer.unobserve(entry.target);

            });

        }, {

            threshold: .5

        });

        counters.forEach(counter => observer.observe(counter));

    },

    animateCounter(element) {

        const target = parseInt(

            element.dataset.counter,

            10

        );

        const suffix = element.dataset.suffix || "";

        const duration = 1800;

        let start = 0;

        const increment = target / (duration / 16);

        function update() {

            start += increment;

            if (start < target) {

                element.textContent =
                    Math.floor(start).toLocaleString("en-ZA") + suffix;

                requestAnimationFrame(update);

            }

            else {

                element.textContent =
                    target.toLocaleString("en-ZA") + suffix;

            }

        }

        update();

    },

    /* ======================================================
       Hero Parallax
    ====================================================== */

    parallaxHero() {

        const hero = document.getElementById("hero");

        if (!hero) return;

        const orbs = hero.querySelectorAll(".hero-orb");

        window.addEventListener("mousemove", e => {

            const x = e.clientX / window.innerWidth;

            const y = e.clientY / window.innerHeight;

            orbs.forEach((orb, index) => {

                const speed = (index + 1) * 20;

                orb.style.transform =

                    `translate(${x * speed}px, ${y * speed}px)`;

            });

        });

    },

    /* ======================================================
       Floating Cards
    ====================================================== */

    floatingCards() {

        const cards = document.querySelectorAll(".float-card");

        if (!cards.length) return;

        cards.forEach((card, index) => {

            card.style.animationDelay = `${index * .5}s`;

            card.classList.add("float");

        });

    },

    /* ======================================================
       Card Tilt
    ====================================================== */

    cardHoverTilt() {

        const cards = document.querySelectorAll(".tilt");

        cards.forEach(card => {

            card.addEventListener("mousemove", e => {

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;

                const y = e.clientY - rect.top;

                const rotateX =

                    ((y / rect.height) - .5) * -10;

                const rotateY =

                    ((x / rect.width) - .5) * 10;

                card.style.transform =

                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-6px)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = "";

            });

        });

    },

    /* ======================================================
       Ripple Effect
    ====================================================== */

    buttonRipple() {

        const buttons = document.querySelectorAll(".btn");

        buttons.forEach(button => {

            button.addEventListener("click", function (e) {

                const circle = document.createElement("span");

                const diameter = Math.max(

                    this.clientWidth,

                    this.clientHeight

                );

                circle.style.width =

                    circle.style.height =

                    diameter + "px";

                circle.className = "ripple";

                const rect = this.getBoundingClientRect();

                circle.style.left =

                    e.clientX - rect.left - diameter / 2 + "px";

                circle.style.top =

                    e.clientY - rect.top - diameter / 2 + "px";

                const ripple = this.querySelector(".ripple");

                if (ripple) ripple.remove();

                this.appendChild(circle);

            });

        });

    }

};

/* ==========================================================
 Init
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => Animations.init()

);