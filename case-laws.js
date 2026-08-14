/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   CASE LAWS PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   01. CATEGORY TABS
========================================================= */

function initializeCaseCategories() {

    const tabs =
        document.querySelectorAll(
            ".case-category-tab"
        );


    const sections =
        document.querySelectorAll(
            ".case-category-section"
        );


    if (
        !tabs.length ||
        !sections.length
    ) {

        return null;

    }


    function activateCategory(category) {

        tabs.forEach(
            function (tab) {

                const active =
                    tab.dataset.category === category;


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
                    section.dataset.caseCategorySection === category;


                section.classList.toggle(
                    "active",
                    active
                );


                section.hidden =
                    !active;

            }
        );


        renderCaseLawResources(
            category
        );

    }


    tabs.forEach(
        function (tab) {

            tab.addEventListener(
                "click",
                function () {

                    activateCategory(
                        tab.dataset.category
                    );

                }
            );

        }
    );


    tabs.forEach(
        function (tab, index) {

            tab.addEventListener(
                "keydown",
                function (event) {

                    let nextIndex =
                        index;


                    if (
                        event.key === "ArrowRight" ||
                        event.key === "ArrowDown"
                    ) {

                        nextIndex =
                            (index + 1) %
                            tabs.length;

                    }


                    if (
                        event.key === "ArrowLeft" ||
                        event.key === "ArrowUp"
                    ) {

                        nextIndex =
                            (index - 1 + tabs.length) %
                            tabs.length;

                    }


                    if (
                        nextIndex !== index
                    ) {

                        event.preventDefault();


                        tabs[nextIndex].focus();


                        activateCategory(
                            tabs[nextIndex].dataset.category
                        );

                    }

                }
            );

        }
    );


    return activateCategory;

}


/* =========================================================
   02. GET CASE LAW DATA
========================================================= */

function getCaseLawResources(
    category
) {

    if (
        typeof caseLawsData === "undefined"
    ) {

        return [];

    }


    if (
        !caseLawsData[category]
    ) {

        return [];

    }


    return caseLawsData[category];

}


/* =========================================================
   03. CREATE CASE LAW CARD
========================================================= */

function createCaseLawCard(
    resource
) {

    const card =
        document.createElement("article");


    card.className =
        "cases-resource-card";


    const title =
        resource.title ||
        "Case Law";


    const court =
        resource.court ||
        "Judicial Decision";


    const description =
        resource.description ||
        "Judicial material for legal study and reference.";


    const file =
        resource.file ||
        "#";


    card.innerHTML = `

        <div class="cases-resource-icon">
            PDF
        </div>


        <div class="cases-resource-content">

            <span class="cases-resource-court">
                ${court}
            </span>


            <h4 class="cases-resource-title">
                ${title}
            </h4>


            <p class="cases-resource-description">
                ${description}
            </p>

        </div>


        <div class="cases-resource-actions">

            <a
                class="cases-resource-action"
                href="${file}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View
            </a>


            <a
                class="cases-resource-action download"
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
   04. EMPTY STATE
========================================================= */

function createCaseLawEmptyState() {

    const empty =
        document.createElement("div");


    empty.className =
        "cases-resource-empty";


    empty.innerHTML = `

        <strong>
            No case laws available yet.
        </strong>


        <p>
            Judicial materials for this category
            will be added here.
        </p>

    `;


    return empty;

}


/* =========================================================
   05. RENDER CASE LAWS
========================================================= */

function renderCaseLawResources(
    category
) {

    const section =
        document.querySelector(
            `[data-case-category-section="${category}"]`
        );


    if (!section) {
        return;
    }


    const area =
        section.querySelector(
            ".cases-resource-area"
        );


    if (!area) {
        return;
    }


    area.innerHTML = "";


    const resources =
        getCaseLawResources(
            category
        );


    /* -----------------------------------------
       Empty state
    ----------------------------------------- */

    if (!resources.length) {

        area.appendChild(
            createCaseLawEmptyState()
        );

        return;

    }


    /* -----------------------------------------
       Resource grid
    ----------------------------------------- */

    const grid =
        document.createElement("div");


    grid.className =
        "cases-resource-grid";


    resources.forEach(
        function (resource) {

            grid.appendChild(
                createCaseLawCard(
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
   06. INITIALIZE
========================================================= */

function initializeCaseLawPage() {

    const activateCategory =
        initializeCaseCategories();


    if (!activateCategory) {
        return;
    }


    activateCategory(
        "supreme-court"
    );

}


/* =========================================================
   07. START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCaseLawPage
    );

} else {

    initializeCaseLawPage();

}