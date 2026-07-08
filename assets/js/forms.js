/**
 * ==========================================================
 * IY Finance Solutions
 * Enquiry Form — Validation & Submission
 * Version: 1.0
 *
 * No backend required: a valid enquiry opens the visitor's
 * email client pre-filled and addressed to the office inbox.
 * ==========================================================
 */

"use strict";

const Forms = {

    EMAIL_TO: "info@iyfinancesolutions.co.za",

    init() {

        this.form = document.getElementById("enquiry-form");

        if (!this.form) return;

        this.success = this.form.querySelector(".form-success");

        this.bindEvents();

    },

    bindEvents() {

        this.form.addEventListener("submit", e => {

            e.preventDefault();

            this.handleSubmit();

        });

        // Clear a field's error as soon as the user fixes it

        this.form

            .querySelectorAll("input, select, textarea")

            .forEach(field => {

                field.addEventListener("input", () => {

                    this.clearError(field);

                });

            });

    },

    /* ======================================================
       Submit
    ====================================================== */

    handleSubmit() {

        if (!this.validate()) return;

        const data = this.collect();

        const subject =
            "Website Enquiry — " +
            (data.service || "General");

        const body = [

            "New enquiry from the IY Finance Solutions website:",
            "",
            "Full Name: " + data.name,
            "Phone: " + data.phone,
            "Email: " + (data.email || "Not provided"),
            "Service: " + (data.service || "Not selected"),
            "",
            "Message:",
            data.message || "No message provided."

        ].join("\r\n");

        window.location.href =

            "mailto:" + this.EMAIL_TO +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        this.showSuccess();

        this.form.reset();

    },

    /* ======================================================
       Collect Values
    ====================================================== */

    collect() {

        return {

            name: this.value("enquiry-name"),

            email: this.value("enquiry-email"),

            phone: this.value("enquiry-phone"),

            service: this.value("enquiry-service"),

            message: this.value("enquiry-message")

        };

    },

    value(id) {

        const field = document.getElementById(id);

        return field ? field.value.trim() : "";

    },

    /* ======================================================
       Validation
    ====================================================== */

    validate() {

        let valid = true;

        const name = document.getElementById("enquiry-name");

        const phone = document.getElementById("enquiry-phone");

        const email = document.getElementById("enquiry-email");

        this.form

            .querySelectorAll(".field-error")

            .forEach(el => el.remove());

        if (!name.value.trim()) {

            this.setError(name, "Please enter your full name.");

            valid = false;

        }

        const phoneValue =
            phone.value.replace(/[\s()-]/g, "");

        if (!/^(\+27|0)\d{9}$/.test(phoneValue)) {

            this.setError(
                phone,
                "Please enter a valid South African phone number."
            );

            valid = false;

        }

        if (
            email.value.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
        ) {

            this.setError(
                email,
                "Please enter a valid email address."
            );

            valid = false;

        }

        return valid;

    },

    setError(field, message) {

        field.classList.add("error");

        field.setAttribute("aria-invalid", "true");

        const error = document.createElement("span");

        error.className = "field-error";

        error.textContent = message;

        field.insertAdjacentElement("afterend", error);

    },

    clearError(field) {

        field.classList.remove("error");

        field.removeAttribute("aria-invalid");

        const next = field.nextElementSibling;

        if (next && next.classList.contains("field-error")) {

            next.remove();

        }

    },

    /* ======================================================
       Success State
    ====================================================== */

    showSuccess() {

        if (!this.success) return;

        this.success.classList.add("show");

        setTimeout(() => {

            this.success.classList.remove("show");

        }, 12000);

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => Forms.init()

);
