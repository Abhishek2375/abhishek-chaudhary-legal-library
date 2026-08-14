/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   LIBRARY PAGE JAVASCRIPT

   This file handles only Library page interactions.
   Header, Footer and common navigation are handled by
   components.js.
========================================================= */


/* =========================================================
   01. RESOURCE CARD INTERACTION
========================================================= */

function initializeResourceCards() {

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );


    if (!resourceCards.length) {
        return;
    }


    resourceCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "resource-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "resource-hover"
                    );

                }
            );

        }
    );

}


/* =========================================================
   02. LIBRARY CARD KEYBOARD ACCESSIBILITY
========================================================= */

function initializeResourceAccessibility() {

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );


    if (!resourceCards.length) {
        return;
    }


    resourceCards.forEach(
        function (card) {

            const link =
                card.querySelector(
                    ".resource-link"
                );


            if (!link) {
                return;
            }


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.addEventListener(
                "keydown",
                function (event) {

                    /*
                        Enter or Space on a focused
                        resource card will open its link.
                    */

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        link.click();

                    }

                }
            );

        }
    );

}


/* =========================================================
   03. LIBRARY RESOURCE CARD FOCUS
========================================================= */

function initializeResourceFocus() {

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );


    resourceCards.forEach(
        function (card) {

            card.addEventListener(
                "focusin",
                function () {

                    card.classList.add(
                        "resource-focus"
                    );

                }
            );


            card.addEventListener(
                "focusout",
                function () {

                    card.classList.remove(
                        "resource-focus"
                    );

                }
            );

        }
    );

}


/* =========================================================
   04. INITIALIZE LIBRARY PAGE
========================================================= */

function initializeLibraryPage() {

    initializeResourceCards();

    initializeResourceAccessibility();

    initializeResourceFocus();

}


/* =========================================================
   05. START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeLibraryPage
    );

} else {

    initializeLibraryPage();

}