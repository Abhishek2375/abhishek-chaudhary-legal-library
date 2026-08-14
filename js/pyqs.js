/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   PYQs PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   01. URL PARAMETERS
========================================================= */

function getPYQParameters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    return {

        course:
            params.get("course"),

        semester:
            params.get("semester")

    };

}


/* =========================================================
   02. COURSE TABS
========================================================= */

function initializePYQCourseTabs() {

    const tabs =
        document.querySelectorAll(
            ".pyq-course-tab"
        );


    const sections =
        document.querySelectorAll(
            ".pyq-course-section"
        );


    if (
        !tabs.length ||
        !sections.length
    ) {

        return null;

    }


    function activateCourse(course) {

        tabs.forEach(
            function (tab) {

                const active =
                    tab.dataset.course === course;


                tab.classList.toggle(
                    "active",
                    active
                );


                tab.setAttribute(
                    "aria-selected",
                    String(active)
                );

            }
        );


        sections.forEach(
            function (section) {

                const active =
                    section.dataset.courseSection === course;


                section.classList.toggle(
                    "active",
                    active
                );


                section.hidden =
                    !active;

            }
        );

    }


    tabs.forEach(
        function (tab) {

            tab.addEventListener(
                "click",
                function () {

                    activateCourse(
                        tab.dataset.course
                    );

                }
            );

        }
    );


    return activateCourse;

}


/* =========================================================
   03. GET PYQ DATA
========================================================= */

function getPYQResources(
    course,
    semester
) {

    if (
        typeof pyqsData === "undefined"
    ) {

        return [];

    }


    if (
        !pyqsData[course]
    ) {

        return [];

    }


    if (
        !pyqsData[course][semester]
    ) {

        return [];

    }


    return pyqsData[course][semester];

}


/* =========================================================
   04. CREATE RESOURCE CARD
========================================================= */

function createPYQResourceCard(
    resource
) {

    const card =
        document.createElement("article");


    card.className =
        "pyqs-resource-card";


    const subject =
        resource.subject ||
        "Law";


    const title =
        resource.title ||
        "Previous Year Question Paper";


    const description =
        resource.description ||
        "Previous year question paper.";


    const file =
        resource.file ||
        "#";


    card.innerHTML = `

        <div class="pyqs-resource-icon">
            PDF
        </div>


        <div class="pyqs-resource-content">

            <span class="pyqs-resource-subject">
                ${subject}
            </span>


            <h4 class="pyqs-resource-title">
                ${title}
            </h4>


            <p class="pyqs-resource-description">
                ${description}
            </p>

        </div>


        <div class="pyqs-resource-actions">

            <a
                class="pyqs-resource-action"
                href="${file}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View
            </a>


            <a
                class="pyqs-resource-action download"
                href="${file}"
                download
            >
                Download
            </a>

        </div>

    `;


    return card;

}


/* =========================================================
   05. EMPTY STATE
========================================================= */

function createPYQEmptyState() {

    const empty =
        document.createElement("div");


    empty.className =
        "pyqs-resource-empty";


    empty.innerHTML = `

        <strong>
            No question papers available yet.
        </strong>

        <p>
            Previous year question papers for this
            semester will be added here.
        </p>

    `;


    return empty;

}


/* =========================================================
   06. RENDER PYQs
========================================================= */

function renderPYQResources(
    course,
    semester
) {

    const section =
        document.querySelector(
            `[data-course-section="${course}"]`
        );


    if (!section) {
        return;
    }


    const area =
        section.querySelector(
            ".pyqs-resource-area"
        );


    if (!area) {
        return;
    }


    area.innerHTML = "";


    /* -----------------------------------------
       Header
    ----------------------------------------- */

    const header =
        document.createElement("div");


    header.className =
        "pyqs-resource-header";


    header.innerHTML = `

        <div>

            <span class="section-label">
                QUESTION PAPERS
            </span>

            <h3>
                Semester ${semester} PYQs
            </h3>

        </div>

    `;


    area.appendChild(
        header
    );


    const resources =
        getPYQResources(
            course,
            semester
        );


    /* -----------------------------------------
       Empty state
    ----------------------------------------- */

    if (!resources.length) {

        area.appendChild(
            createPYQEmptyState()
        );

        return;

    }


    /* -----------------------------------------
       Resource grid
    ----------------------------------------- */

    const grid =
        document.createElement("div");


    grid.className =
        "pyqs-resource-grid";


    resources.forEach(
        function (resource) {

            grid.appendChild(
                createPYQResourceCard(
                    resource
                )
            );

        }
    );


    area.appendChild(
        grid
    );

}


/* =========================================================
   07. SEMESTER LINKS
========================================================= */

function initializePYQSemesterLinks() {

    const cards =
        document.querySelectorAll(
            ".pyq-semester-card"
        );


    cards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const course =
                        card.dataset.course;


                    const semester =
                        card.dataset.semester;


                    if (
                        !course ||
                        !semester
                    ) {

                        return;

                    }


                    setTimeout(
                        function () {

                            renderPYQResources(
                                course,
                                semester
                            );

                        },
                        0
                    );

                }
            );

        }
    );

}


/* =========================================================
   08. URL INITIALIZATION
========================================================= */

function initializePYQURL(
    activateCourse
) {

    const {
        course,
        semester
    } =
        getPYQParameters();


    const normalizedCourse =
        course
            ? course.toUpperCase()
            : "LLB";


    const validCourse =
        normalizedCourse === "LLB" ||
        normalizedCourse === "LLM";


    const selectedCourse =
        validCourse
            ? normalizedCourse
            : "LLB";


    activateCourse(
        selectedCourse
    );


    if (!semester) {
        return;
    }


    const selectedSemester =
        Number(semester);


    const maximum =
        selectedCourse === "LLB"
            ? 6
            : 4;


    if (
        selectedSemester >= 1 &&
        selectedSemester <= maximum
    ) {

        renderPYQResources(
            selectedCourse,
            String(selectedSemester)
        );

    }

}


/* =========================================================
   09. INITIALIZE
========================================================= */

function initializePYQPage() {

    const activateCourse =
        initializePYQCourseTabs();


    if (!activateCourse) {
        return;
    }


    initializePYQSemesterLinks();


    initializePYQURL(
        activateCourse
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
        initializePYQPage
    );

} else {

    initializePYQPage();

}