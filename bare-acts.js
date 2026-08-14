/* =========================================================
   ABHISHEK CHAUDHARY
   LEGAL STUDENT LIBRARY

   BARE ACTS PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   01. CATEGORY TABS
========================================================= */

function initializeActCategories() {

    const tabs =
        document.querySelectorAll(
            ".act-category-tab"
        );


    const sections =
        document.querySelectorAll(
            ".act-category-section"
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
                    section.dataset.categorySection === category;


                section.classList.toggle(
                    "active",
                    active
                );


                section.hidden =
                    !active;

            }
        );


        renderBareActResources(
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
   02. GET RESOURCE DATA
========================================================= */

function getBareActResources(
    category
) {

    if (
        typeof bareActsData === "undefined"
    ) {

        return [];

    }


    if (
        !bareActsData[category]
    ) {

        return [];

    }


    return bareActsData[category];

}


/* =========================================================
   03. CREATE RESOURCE CARD
========================================================= */

function createBareActCard(
    resource
) {

    const card =
        document.createElement("article");


    card.className =
        "acts-resource-card";


    const title =
        resource.title ||
        "Bare Act";


    const type =
        resource.type ||
        "Bare Act";


    const description =
        resource.description ||
        "Statutory legal material.";


    const file =
        resource.file ||
        "#";


    card.innerHTML = `

        <div class="acts-resource-icon">
            PDF
        </div>


        <div class="acts-resource-content">

            <span class="acts-resource-type">
                ${type}
            </span>


            <h4 class="acts-resource-title">
                ${title}
            </h4>


            <p class="acts-resource-description">
                ${description}
            </p>

        </div>


        <div class="acts-resource-actions">

            <a
                class="acts-resource-action"
                href="${file}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View
            </a>


            <a
                class="acts-resource-action download"
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

function createBareActEmptyState() {

    const empty =
        document.createElement("div");


    empty.className =
        "acts-resource-empty";


    empty.innerHTML = `

        <strong>
            No Bare Acts available yet.
        </strong>


        <p>
            Statutory materials for this category
            will be added here.
        </p>

    `;


    return empty;

}


/* =========================================================
   05. RENDER RESOURCES
========================================================= */

function renderBareActResources(
    category
) {

    const section =
        document.querySelector(
            `[data-category-section="${category}"]`
        );


    if (!section) {
        return;
    }


    const area =
        section.querySelector(
            ".acts-resource-area"
        );


    if (!area) {
        return;
    }


    area.innerHTML = "";


    const resources =
        getBareActResources(
            category
        );


    /* -----------------------------------------
       Empty state
    ----------------------------------------- */

    if (!resources.length) {

        area.appendChild(
            createBareActEmptyState()
        );

        return;

    }


    /* -----------------------------------------
       Resource grid
    ----------------------------------------- */

    const grid =
        document.createElement("div");


    grid.className =
        "acts-resource-grid";


    resources.forEach(
        function (resource) {

            grid.appendChild(
                createBareActCard(
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

function initializeBareActsPage() {

    const activateCategory =
        initializeActCategories();


    if (!activateCategory) {
        return;
    }


    /*
       Load the first category automatically.
    */

    activateCategory(
        "central"
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
        initializeBareActsPage
    );

} else {

    initializeBareActsPage();

}