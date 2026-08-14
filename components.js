/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   SHARED WEBSITE COMPONENTS

   This file controls:
   - Shared Header
   - Main Navigation
   - Courses Dropdown
   - Shared Footer
   - Mobile Navigation
   - Active Navigation
   - Authentication Buttons
========================================================= */


/* =========================================================
   01. SHARED HEADER
========================================================= */

function renderHeader() {

    const headerContainer =
        document.getElementById("site-header");


    if (!headerContainer) {
        return;
    }


    headerContainer.innerHTML = `

        <header class="site-header">

            <div class="container header-container">


                <!-- =================================================
                     BRAND
                ================================================== -->

                <a
                    href="index.html"
                    class="brand"
                    aria-label="Abhishek Chaudhary Legal Student Library"
                >

                    <div
                        class="brand-logo"
                        aria-label="AC Logo"
                    >

                        <span class="logo-a">
                            A
                        </span>

                        <span class="logo-c">
                            C
                        </span>

                    </div>


                    <div class="brand-text">

                        <span class="brand-name">
                            Abhishek Chaudhary
                        </span>


                        <span class="brand-tagline">
                            Legal Student Library
                        </span>

                    </div>

                </a>



                <!-- =================================================
                     MAIN NAVIGATION
                ================================================== -->

                <nav
                    class="main-navigation"
                    aria-label="Main Navigation"
                >


                    <!-- HOME -->

                    <a
                        href="index.html"
                        class="nav-link"
                        data-page="home"
                    >
                        Home
                    </a>



                    <!-- ABOUT -->

                    <a
                        href="about.html"
                        class="nav-link"
                        data-page="about"
                    >
                        About
                    </a>



                    <!-- =================================================
                         COURSES
                    ================================================== -->

                    <div class="nav-item dropdown">


                        <button
                            class="dropdown-toggle"
                            type="button"
                            aria-expanded="false"
                            aria-haspopup="true"
                        >

                            Courses

                            <span
                                class="dropdown-arrow"
                                aria-hidden="true"
                            >
                                ⌄
                            </span>

                        </button>



                        <div
                            class="dropdown-menu"
                            role="menu"
                        >


                            <!-- =================================================
                                 LLB
                            ================================================== -->

                            <div class="dropdown-column">

                                <div class="dropdown-heading">

                                    <span class="course-label">
                                        LLB
                                    </span>


                                    <span class="course-description">
                                        Bachelor of Laws
                                    </span>

                                </div>


                                <a
                                    href="notes.html?course=LLB&semester=1"
                                    role="menuitem"
                                >
                                    Semester 1
                                </a>


                                <a
                                    href="notes.html?course=LLB&semester=2"
                                    role="menuitem"
                                >
                                    Semester 2
                                </a>


                                <a
                                    href="notes.html?course=LLB&semester=3"
                                    role="menuitem"
                                >
                                    Semester 3
                                </a>


                                <a
                                    href="notes.html?course=LLB&semester=4"
                                    role="menuitem"
                                >
                                    Semester 4
                                </a>


                                <a
                                    href="notes.html?course=LLB&semester=5"
                                    role="menuitem"
                                >
                                    Semester 5
                                </a>


                                <a
                                    href="notes.html?course=LLB&semester=6"
                                    role="menuitem"
                                >
                                    Semester 6
                                </a>

                            </div>



                            <!-- =================================================
                                 LLM
                            ================================================== -->

                            <div class="dropdown-column">

                                <div class="dropdown-heading">

                                    <span class="course-label">
                                        LLM
                                    </span>


                                    <span class="course-description">
                                        Master of Laws
                                    </span>

                                </div>


                                <a
                                    href="notes.html?course=LLM&semester=1"
                                    role="menuitem"
                                >
                                    Semester 1
                                </a>


                                <a
                                    href="notes.html?course=LLM&semester=2"
                                    role="menuitem"
                                >
                                    Semester 2
                                </a>


                                <a
                                    href="notes.html?course=LLM&semester=3"
                                    role="menuitem"
                                >
                                    Semester 3
                                </a>


                                <a
                                    href="notes.html?course=LLM&semester=4"
                                    role="menuitem"
                                >
                                    Semester 4
                                </a>

                            </div>

                        </div>

                    </div>



                    <!-- =================================================
                         LIBRARY
                    ================================================== -->

                    <a
                        href="library.html"
                        class="nav-link"
                        data-page="library"
                    >
                        Library
                    </a>



                    <!-- CONTACT -->

                    <a
                        href="contact.html"
                        class="nav-link"
                        data-page="contact"
                    >
                        Contact
                    </a>

                </nav>



                <!-- =================================================
                     HEADER ACTIONS
                ================================================== -->

                <div class="header-actions">


                    <button
                        class="signin-button"
                        type="button"
                        data-auth="signin"
                    >
                        Sign In
                    </button>


                    <button
                        class="signup-button"
                        type="button"
                        data-auth="signup"
                    >
                        Sign Up
                    </button>

                </div>



                <!-- =================================================
                     MOBILE MENU BUTTON
                ================================================== -->

                <button
                    class="mobile-menu-button"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="main-navigation"
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </header>

    `;


    setActiveNavigation();

}


/* =========================================================
   02. SHARED FOOTER
========================================================= */

function renderFooter() {

    const footerContainer =
        document.getElementById("site-footer");


    if (!footerContainer) {
        return;
    }


    footerContainer.innerHTML = `

        <footer class="site-footer">


            <div class="container footer-main">


                <!-- =================================================
                     BRAND
                ================================================== -->

                <div class="footer-brand">


                    <a
                        href="index.html"
                        class="footer-logo"
                    >

                        <div
                            class="brand-logo footer-logo-mark"
                            aria-label="AC Logo"
                        >

                            <span class="logo-a">
                                A
                            </span>


                            <span class="logo-c">
                                C
                            </span>

                        </div>


                        <div class="footer-brand-name">

                            <strong>
                                Abhishek Chaudhary
                            </strong>


                            <span>
                                Legal Student Library
                            </span>

                        </div>

                    </a>


                    <p>
                        A digital library built to make
                        legal study resources easier to
                        access for students of law.
                    </p>


                    <!-- Telegram -->
                    <!-- Replace # with your actual Telegram URL -->

                    <a
						href="https://t.me/abhishekchaudharylegallibrary"
						class="footer-telegram-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Join Abhishek Chaudhary Legal Library on Telegram"
					>

						Join our Telegram

						<span aria-hidden="true">
						→
						</span>

					</a>

                </div>



                <!-- =================================================
                     QUICK LINKS
                ================================================== -->

                <div class="footer-column">

                    <h3>
                        Quick Links
                    </h3>


                    <a href="index.html">
                        Home
                    </a>


                    <a href="about.html">
                        About Us
                    </a>


                    <a href="library.html">
                        Library
                    </a>


                    <a href="contact.html">
                        Contact Us
                    </a>

                </div>



                <!-- =================================================
                     LIBRARY
                ================================================== -->

                <div class="footer-column">

                    <h3>
                        Library
                    </h3>


                    <a href="notes.html">
                        Study Notes
                    </a>


                    <a href="pyqs.html">
                        Previous Papers
                    </a>


                    <a href="bare-acts.html">
                        Bare Acts
                    </a>


                    <a href="case-laws.html">
                        Case Laws
                    </a>

                </div>



                <!-- =================================================
                     LEGAL
                ================================================== -->

                <div class="footer-column">

                    <h3>
                        Legal
                    </h3>


                    <a href="privacy-policy.html">
                        Privacy Policy
                    </a>


                    <a href="disclaimer.html">
                        Disclaimer
                    </a>


                    <a href="terms-conditions.html">
                        Terms &amp; Conditions
                    </a>


                    <a href="contact.html">
                        Contact Us
                    </a>

                </div>

            </div>



            <!-- =================================================
                 FOOTER BOTTOM
            ================================================== -->

            <div class="container footer-bottom">


                <p>

                    ©
                    <span id="current-year">
                        2026
                    </span>

                    Abhishek Chaudhary.
                    All rights reserved.

                </p>


                <p>
                    Legal Student Library
                </p>

            </div>


        </footer>

    `;

}


/* =========================================================
   03. ACTIVE NAVIGATION
========================================================= */

function setActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const pageMap = {

        "": "home",

        "index.html": "home",

        "about.html": "about",

        "library.html": "library",

        "contact.html": "contact"

    };


    const currentSection =
        pageMap[currentPage];


    if (!currentSection) {
        return;
    }


    const activeLink =
        document.querySelector(
            `.nav-link[data-page="${currentSection}"]`
        );


    if (activeLink) {

        activeLink.classList.add(
            "active"
        );

    }

}


/* =========================================================
   04. MOBILE NAVIGATION
========================================================= */

function initializeMobileNavigation() {

    const menuButton =
        document.querySelector(
            ".mobile-menu-button"
        );


    const navigation =
        document.querySelector(
            ".main-navigation"
        );


    if (
        !menuButton ||
        !navigation
    ) {

        return;

    }


    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navigation.classList.toggle(
                    "mobile-active"
                );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }
    );


    /* Close menu after clicking a normal link */

    const navigationLinks =
        navigation.querySelectorAll(
            "a"
        );


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 900
                    ) {

                        navigation.classList.remove(
                            "mobile-active"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuButton.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   05. COURSES DROPDOWN
========================================================= */

function initializeCourseDropdown() {

    const dropdown =
        document.querySelector(
            ".dropdown"
        );


    const toggle =
        document.querySelector(
            ".dropdown-toggle"
        );


    if (
        !dropdown ||
        !toggle
    ) {

        return;

    }


    /* ---------------------------------------------------------
       Mobile click
    --------------------------------------------------------- */

    toggle.addEventListener(
        "click",
        function (event) {

            if (
                window.innerWidth <= 900
            ) {

                event.preventDefault();


                const isOpen =
                    dropdown.classList.toggle(
                        "mobile-open"
                    );


                toggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }

        }
    );


    /* ---------------------------------------------------------
       Desktop keyboard accessibility
    --------------------------------------------------------- */

    toggle.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                if (
                    window.innerWidth > 900
                ) {

                    event.preventDefault();

                    const isOpen =
                        toggle.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    toggle.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );

                }

            }

        }
    );


    /* ---------------------------------------------------------
       Close dropdown when clicking outside
    --------------------------------------------------------- */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !dropdown.contains(event.target)
            ) {

                dropdown.classList.remove(
                    "mobile-open"
                );


                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================================
   06. CURRENT YEAR
========================================================= */

function initializeCurrentYear() {

    const year =
        document.getElementById(
            "current-year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   07. AUTH BUTTONS
========================================================= */

function initializeAuthButtons() {

    const signinButton =
        document.querySelector(
            '[data-auth="signin"]'
        );


    const signupButton =
        document.querySelector(
            '[data-auth="signup"]'
        );


    if (signinButton) {

        signinButton.addEventListener(
            "click",
            function () {

                /*
                    Authentication will be connected later.

                    Planned:
                    - Email Sign In
                    - Google Sign In
                */

                console.log(
                    "Sign In system will be connected later."
                );

            }
        );

    }


    if (signupButton) {

        signupButton.addEventListener(
            "click",
            function () {

                /*
                    Authentication will be connected later.
                */

                console.log(
                    "Sign Up system will be connected later."
                );

            }
        );

    }

}


/* =========================================================
   08. HANDLE WINDOW RESIZE
========================================================= */

function handleComponentResize() {

    const navigation =
        document.querySelector(
            ".main-navigation"
        );


    const dropdown =
        document.querySelector(
            ".dropdown"
        );


    const menuButton =
        document.querySelector(
            ".mobile-menu-button"
        );


    const toggle =
        document.querySelector(
            ".dropdown-toggle"
        );


    if (
        window.innerWidth > 900
    ) {

        if (navigation) {

            navigation.classList.remove(
                "mobile-active"
            );

        }


        if (dropdown) {

            dropdown.classList.remove(
                "mobile-open"
            );

        }


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }


        if (toggle) {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

}


/* =========================================================
   09. INITIALIZE COMMON COMPONENTS
========================================================= */

function initializeComponents() {

    renderHeader();

    renderFooter();

    initializeMobileNavigation();

    initializeCourseDropdown();

    initializeCurrentYear();

    initializeAuthButtons();


    window.addEventListener(
        "resize",
        handleComponentResize
    );

}


/* =========================================================
   10. START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeComponents
    );

} else {

    initializeComponents();

}