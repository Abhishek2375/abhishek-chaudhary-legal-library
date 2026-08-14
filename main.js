/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   COMMON JAVASCRIPT

   This file handles only functionality that can be
   shared across the entire website.

   Header / Footer / Navigation:
   components.js

   Page-specific functionality:
   Individual page JS files
========================================================= */


/* =========================================================
   01. HEADER SCROLL STATE
========================================================= */

function initializeHeaderScroll() {

    const header =
        document.querySelector(".site-header");


    if (!header) {
        return;
    }


    function updateHeaderState() {

        if (window.scrollY > 20) {

            header.classList.add(
                "header-scrolled"
            );

        } else {

            header.classList.remove(
                "header-scrolled"
            );

        }

    }


    updateHeaderState();


    window.addEventListener(
        "scroll",
        updateHeaderState,
        {
            passive: true
        }
    );

}


/* =========================================================
   02. SMOOTH INTERNAL LINKS
========================================================= */

function initializeSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    if (!links.length) {
        return;
    }


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );

}


/* =========================================================
   03. EXTERNAL / TELEGRAM PLACEHOLDER LINKS
========================================================= */

function initializePlaceholderLinks() {

    const placeholderLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    placeholderLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    /*
                        These links will later receive
                        their real destination.

                        Example:
                        Telegram channel
                        Authentication
                        External resources
                    */

                    event.preventDefault();

                    console.log(
                        "This link will be connected later."
                    );

                }
            );

        }
    );

}


/* =========================================================
   04. COMMON EXTERNAL LINK SAFETY
========================================================= */

function initializeExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    links.forEach(
        function (link) {

            const existingRel =
                link.getAttribute("rel");


            if (!existingRel) {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        }
    );

}


/* =========================================================
   05. REDUCED MOTION SUPPORT
========================================================= */

function initializeReducedMotion() {

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        prefersReducedMotion.matches
    ) {

        document.documentElement.classList.add(
            "reduced-motion"
        );

    }

}


/* =========================================================
   06. COMMON PAGE INITIALIZATION
========================================================= */

function initializeMainJS() {

    initializeHeaderScroll();

    initializeSmoothLinks();

    initializePlaceholderLinks();

    initializeExternalLinks();

    initializeReducedMotion();

}


/* =========================================================
   07. START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeMainJS
    );

} else {

    initializeMainJS();

}