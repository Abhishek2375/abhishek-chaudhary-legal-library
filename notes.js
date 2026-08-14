/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   NOTES PAGE JAVASCRIPT

   Handles:
   - LLB / LLM switching
   - URL parameters
   - Semester selection
   - Resource rendering
   - View / Download links
========================================================= */


/* =========================================================
   01. GET URL PARAMETERS
========================================================= */

function getNotesURLParameters() {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    return {

        course:
            parameters.get("course"),

        semester:
            parameters.get("semester")

    };

}


/* =========================================================
   02. COURSE TABS
========================================================= */

function initializeCourseTabs() {

    const tabs =
        document.querySelectorAll(
            ".course-tab"
        );


    const sections =
        document.querySelectorAll(
            ".semester-section"
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

                    const course =
                        tab.dataset.course;


                    if (!course) {
                        return;
                    }


                    activateCourse(course);

                }
            );

        }
    );


    return activateCourse;

}


/* =========================================================
   03. RESOURCE DATA
========================================================= */

function getNotesResources(
    course,
    semester
) {

    if (
        typeof notesData === "undefined"
    ) {

        return [];

    }


    if (
        !notesData[course]
    ) {

        return [];

    }


    if (
        !notesData[course][semester]
    ) {

        return [];

    }


    return notesData[course][semester];

}


/* =========================================================
   04. CREATE RESOURCE CARD
========================================================= */

function createNotesResourceCard(
    resource
) {

    const card =
        document.createElement("article");


    card.className =
        "notes-resource-card";


    const subject =
        resource.subject ||
        "Law";


    const title =
        resource.title ||
        "Study Material";


    const description =
        resource.description ||
        "Legal study material.";


    const file =
        resource.file ||
        "#";


    card.innerHTML = `

        <div class="notes-resource-icon">
            PDF
        </div>


        <div class="notes-resource-content">

            <span class="notes-resource-subject">
                ${subject}
            </span>


            <h4 class="notes-resource-title">
                ${title}
            </h4>


            <p class="notes-resource-description">
                ${description}
            </p>

        </div>


        <div class="notes-resource-actions">

            <a
                class="notes-resource-action"
                href="${file}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View
            </a>


            <a
                class="notes-resource-action download"
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

function createNotesEmptyState() {

    const empty =
        document.createElement("div");


    empty.className =
        "notes-resource-empty";


    empty.innerHTML = `

        <strong>
            No notes available yet.
        </strong>

        <p>
            Study materials for this semester
            will be added here.
        </p>

    `;


    return empty;

}


/* =========================================================
   06. RENDER RESOURCES
========================================================= */

function renderNotesResources(
    course,
    semester
) {

    const courseSection =
        document.querySelector(
            `[data-course-section="${course}"]`
        );


    if (!courseSection) {
        return;
    }


    const resourceArea =
        courseSection.querySelector(
            ".notes-resource-area"
        );


    if (!resourceArea) {
        return;
    }


    resourceArea.innerHTML = "";


    /* -----------------------------------------
       Resource Header
    ----------------------------------------- */

    const header =
        document.createElement("div");


    header.className =
        "notes-resource-header";


    header.innerHTML = `

        <div>

            <span class="section-label">
                RESOURCES
            </span>

            <h3>
                Semester ${semester} Notes
            </h3>

        </div>

    `;


    resourceArea.appendChild(
        header
    );


    const resources =
        getNotesResources(
            course,
            semester
        );


    /* -----------------------------------------
       Empty state
    ----------------------------------------- */

    if (!resources.length) {

        resourceArea.appendChild(
            createNotesEmptyState()
        );

        return;

    }


    /* -----------------------------------------
       Resource grid
    ----------------------------------------- */

    const grid =
        document.createElement("div");


    grid.className =
        "notes-resource-grid";


    resources.forEach(
        function (resource) {

            grid.appendChild(
                createNotesResourceCard(
                    resource
                )
            );

        }
    );


    resourceArea.appendChild(
        grid
    );

}


/* =========================================================
   07. SEMESTER CARD LINKS
========================================================= */

function initializeSemesterLinks() {

    const cards =
        document.querySelectorAll(
            ".semester-card"
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


                    /*
                        Render resources immediately
                        when the semester is selected.
                    */

                    setTimeout(
                        function () {

                            renderNotesResources(
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
   08. INITIAL URL STATE
========================================================= */

function initializeNotesURL(
    activateCourse
) {

    const {
        course,
        semester
    } =
        getNotesURLParameters();


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


    if (semester) {

        const validSemester =
            Number(semester);


        const maxSemester =
            selectedCourse === "LLB"
                ? 6
                : 4;


        if (
            validSemester >= 1 &&
            validSemester <= maxSemester
        ) {

            renderNotesResources(
                selectedCourse,
                String(validSemester)
            );

        }

    }

}


/* =========================================================
   09. INITIALIZE
========================================================= */

function initializeNotesPage() {

    const activateCourse =
        initializeCourseTabs();


    if (!activateCourse) {
        return;
    }


    initializeSemesterLinks();


    initializeNotesURL(
        activateCourse
    );

}


/* =========================================================
   10. START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeNotesPage
    );

} else {

    initializeNotesPage();

}