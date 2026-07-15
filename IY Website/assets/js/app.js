/**
 * ==========================================================
 * IY Finance Solutions
 * Main Application
 * Version: 1.0.0
 * ==========================================================
 */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});

/* ==========================================================
   Main App
========================================================== */

const App = {

    init() {

        this.cacheDOM();

        this.loader();

        this.progressBar();

        this.smoothScroll();

        this.activeNavigation();

        this.currentYear();

        this.backToTop();

        this.formDefaults();

        console.log(
            "%cIY Finance Solutions",
            "color:#0CAE60;font-size:18px;font-weight:bold;"
        );

    },

    /* ======================================================
       Cache Elements
    ====================================================== */

    cacheDOM() {

        this.loaderElement =
            document.getElementById("loader");

        this.progress =
            document.getElementById("progress-bar");

        this.header =
            document.getElementById("header");

        this.backTop =
            document.getElementById("back-to-top");

    },

    /* ======================================================
       Loader
    ====================================================== */

    loader() {

        if (!this.loaderElement) return;

        window.addEventListener("load", () => {

            setTimeout(() => {

                this.loaderElement.classList.add("loaded");

            }, 700);

        });

    },

    /* ======================================================
       Scroll Progress
    ====================================================== */

    progressBar() {

        if (!this.progress) return;

        window.addEventListener("scroll", () => {

            const scrollTop =
                window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                (scrollTop / docHeight) * 100;

            this.progress.style.width =
                progress + "%";

        });

    },

    /* ======================================================
       Smooth Anchor Scroll
    ====================================================== */

    smoothScroll() {

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );

        links.forEach(link => {

            link.addEventListener("click", e => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            });

        });

    },

    /* ======================================================
       Active Navigation
    ====================================================== */

    activeNavigation() {

        const sections =
            document.querySelectorAll("section");

        const navLinks =
            document.querySelectorAll(".nav-links a");

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const top =
                    section.offsetTop - 150;

                if (window.scrollY >= top) {

                    current = section.id;

                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }

            });

        });

    },

    /* ======================================================
       Footer Year
    ====================================================== */

    currentYear() {

        const year =
            document.getElementById("current-year");

        if (year) {

            year.textContent =
                new Date().getFullYear();

        }

    },

    /* ======================================================
       Back To Top
    ====================================================== */

    backToTop() {

        if (!this.backTop) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                this.backTop.classList.add("show");

            } else {

                this.backTop.classList.remove("show");

            }

        });

        this.backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    },

    /* ======================================================
       Forms
    ====================================================== */

    formDefaults() {

        const forms =
            document.querySelectorAll("form");

        forms.forEach(form => {

            form.setAttribute("novalidate", true);

        });

    }

};

/* ==========================================================
   Helpers
========================================================== */

const Utils = {

    /**
     * Select one element
     */

    $(selector) {

        return document.querySelector(selector);

    },

    /**
     * Select multiple
     */

    $$(selector) {

        return document.querySelectorAll(selector);

    },

    /**
     * Random Integer
     */

    random(min, max) {

        return Math.floor(

            Math.random() *

            (max - min + 1)

        ) + min;

    },

    /**
     * Debounce
     */

    debounce(fn, wait = 100) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                fn.apply(this, args);

            }, wait);

        };

    }

};

/* ==========================================================
   Window Resize Hook
========================================================== */

window.addEventListener(

    "resize",

    Utils.debounce(() => {

        console.log("Viewport:", window.innerWidth);

    }, 200)

);

/* ==========================================================
   Theme Ready
========================================================== */

document.documentElement.setAttribute(

    "data-theme",

    "light"

);