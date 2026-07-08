/**
 * ==========================================================
 * IY Finance Solutions
 * Navigation
 * Version: 1.0
 * ==========================================================
 */

"use strict";

const Navigation = {

    init() {

        this.cacheDOM();

        this.createMobileMenu();

        this.bindEvents();

        // Sync sticky state with any restored scroll position

        this.handleScroll();

    },

    cacheDOM() {

        this.header = document.getElementById("header");

        this.navbar = document.querySelector(".navbar");

        this.toggle = document.getElementById("menu-toggle");

        this.links = document.querySelector(".nav-links");

    },

    createMobileMenu() {

        if (!this.links) return;

        this.mobileMenu = this.links.cloneNode(true);

        this.mobileMenu.classList.remove("nav-links");

        this.mobileMenu.classList.add("mobile-nav");

        document.body.appendChild(this.mobileMenu);

    },

    bindEvents() {

        window.addEventListener(

            "scroll",

            this.handleScroll.bind(this)

        );

        if (this.toggle) {

            this.toggle.addEventListener(

                "click",

                this.toggleMenu.bind(this)

            );

        }

        document.addEventListener(

            "keydown",

            this.handleKeyboard.bind(this)

        );

        document.addEventListener(

            "click",

            this.handleOutsideClick.bind(this)

        );

        this.mobileMenu

            ?.querySelectorAll("a")

            .forEach(link => {

                link.addEventListener(

                    "click",

                    () => this.closeMenu()

                );

            });

    },

    /* ======================================================
       Sticky Navigation
    ====================================================== */

    handleScroll() {

        if (!this.header) return;

        if (window.scrollY > 40) {

            this.header.classList.add("scrolled");

        }

        else {

            this.header.classList.remove("scrolled");

        }

    },

    /* ======================================================
       Toggle Menu
    ====================================================== */

    toggleMenu(e) {

        e.stopPropagation();

        this.toggle.classList.toggle("active");

        this.mobileMenu.classList.toggle("open");

        document.body.classList.toggle("no-scroll");

        const expanded =

            this.toggle.getAttribute("aria-expanded") === "true";

        this.toggle.setAttribute(

            "aria-expanded",

            !expanded

        );

    },

    /* ======================================================
       Close
    ====================================================== */

    closeMenu() {

        this.mobileMenu.classList.remove("open");

        this.toggle.classList.remove("active");

        document.body.classList.remove("no-scroll");

        this.toggle.setAttribute(

            "aria-expanded",

            "false"

        );

    },

    /* ======================================================
       ESC Key
    ====================================================== */

    handleKeyboard(e) {

        if (e.key === "Escape") {

            this.closeMenu();

        }

    },

    /* ======================================================
       Click Outside
    ====================================================== */

    handleOutsideClick(e) {

        if (

            !this.mobileMenu.classList.contains("open")

        ) return;

        const insideMenu =

            this.mobileMenu.contains(e.target);

        const toggleButton =

            this.toggle.contains(e.target);

        if (!insideMenu && !toggleButton) {

            this.closeMenu();

        }

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => Navigation.init()

);