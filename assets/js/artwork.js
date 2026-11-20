/* =========================================
   EASYBLACK
   Artwork Page Generator
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("artwork-container");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const artworkID = params.get("id");

    const artwork = artworks.find(item => item.id === artworkID);

    if (!artwork) {
        container.innerHTML = `
            <section class="error-page">
                <h1>Artwork Not Found</h1>
                <a href="index.html">Return Home</a>
            </section>
        `;
        return;
    }

    const mockups = Array.isArray(artwork.mockups)
        ? artwork.mockups
        : [];

    container.innerHTML = `

        <section class="single-artwork">

            <div class="artwork-large-image">
                <img
                    src="${artwork.image}"
                    alt="${artwork.title} by Easyblack"
                >
            </div>

            <div class="artwork-information">

                <h1>${artwork.title}</h1>

                <p class="collection">
                    ${artwork.collection}
                </p>

                <div class="details">

                    <p>
                        <strong>Year</strong>
                        ${artwork.year}
                    </p>

                    <p>
                        <strong>Medium</strong>
                        ${artwork.medium}
                    </p>

                    <p>
                        <strong>Dimensions</strong>
                        ${artwork.dimensions || "Not specified"}
                    </p>

                    ${
                        artwork.collection === "Prerequisite"
                        ? `
                            <p>
                                <strong>Availability</strong>
                                ${artwork.availability || ""}
                            </p>
                        `
                        : ""
                    }

                </div>

                <a
                    href="contact.html?artwork=${encodeURIComponent(artwork.title)}"
                    class="inquiry-button"
                >
                    Request Information
                </a>

            </div>

        </section>

        ${
            mockups.length > 0
            ? `
                <section class="mockup-section">

                    <div class="mockup-heading">
                        <h2>See It in a Space</h2>
                        <p>
                            Explore different interior presentations
                            of this artwork.
                        </p>
                    </div>

                    <div class="mockup-slider">

                        <div class="mockup-image-container">

                            <img
                                id="mockup-image"
                                src="${mockups[0]}"
                                alt="${artwork.title} interior presentation"
                            >

                            <button
                                type="button"
                                class="mockup-arrow mockup-previous"
                                id="mockup-previous"
                                aria-label="Previous mockup"
                            >
                                &#10094;
                            </button>

                            <button
                                type="button"
                                class="mockup-arrow mockup-next"
                                id="mockup-next"
                                aria-label="Next mockup"
                            >
                                &#10095;
                            </button>

                        </div>

                        <div
                            class="mockup-counter"
                            id="mockup-counter"
                        >
                            1 / ${mockups.length}
                        </div>

                        <div
                            class="mockup-dots"
                            id="mockup-dots"
                        ></div>

                    </div>

                </section>
            `
            : ""
        }

        <div class="artwork-navigation">

            <a
                id="back-to-collection"
                class="back-link"
                href="#"
            >
                ← Back to Collection
            </a>

        </div>

        <div class="artwork-pagination">

            <a id="previous-artwork" href="#">
                ← Previous Artwork
            </a>

            <a id="next-artwork" href="#">
                Next Artwork →
            </a>

        </div>

    `;


    /* =========================================
       MOCKUP SLIDER
    ========================================= */

    if (mockups.length > 0) {

        let currentMockup = 0;

        const mockupImage =
            document.getElementById("mockup-image");

        const counter =
            document.getElementById("mockup-counter");

        const dotsContainer =
            document.getElementById("mockup-dots");

        const previousButton =
            document.getElementById("mockup-previous");

        const nextButton =
            document.getElementById("mockup-next");


        function showMockup(index) {

            currentMockup =
                (index + mockups.length) % mockups.length;

            mockupImage.src = mockups[currentMockup];

            mockupImage.alt =
                `${artwork.title} interior presentation ${currentMockup + 1}`;

            counter.textContent =
                `${currentMockup + 1} / ${mockups.length}`;

            dotsContainer.querySelectorAll("button").forEach(
                (dot, dotIndex) => {

                    dot.classList.toggle(
                        "active",
                        dotIndex === currentMockup
                    );

                    dot.setAttribute(
                        "aria-current",
                        dotIndex === currentMockup ? "true" : "false"
                    );

                }
            );

        }


        mockups.forEach((image, index) => {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "mockup-dot";

            dot.setAttribute(
                "aria-label",
                `View mockup ${index + 1}`
            );

            dot.addEventListener("click", () => {
                showMockup(index);
            });

            dotsContainer.appendChild(dot);

        });


        previousButton.addEventListener("click", () => {
            showMockup(currentMockup - 1);
        });

        nextButton.addEventListener("click", () => {
            showMockup(currentMockup + 1);
        });


        /* Mobile swipe support */

        let touchStartX = 0;

        const slider =
            document.querySelector(".mockup-image-container");

        slider.addEventListener(
            "touchstart",
            event => {
                touchStartX = event.changedTouches[0].screenX;
            },
            { passive: true }
        );

        slider.addEventListener(
            "touchend",
            event => {

                const touchEndX =
                    event.changedTouches[0].screenX;

                const difference =
                    touchStartX - touchEndX;

                if (Math.abs(difference) > 50) {

                    if (difference > 0) {
                        showMockup(currentMockup + 1);
                    } else {
                        showMockup(currentMockup - 1);
                    }

                }

            },
            { passive: true }
        );


        showMockup(0);

    }


    /* =========================================
       PREVIOUS / NEXT ARTWORK NAVIGATION
    ========================================= */

    const collectionWorks = artworks.filter(
        item => item.collection === artwork.collection
    );

    const currentIndex = collectionWorks.findIndex(
        item => item.id === artwork.id
    );

    const previous =
        currentIndex === 0
            ? collectionWorks[collectionWorks.length - 1]
            : collectionWorks[currentIndex - 1];

    const next =
        currentIndex === collectionWorks.length - 1
            ? collectionWorks[0]
            : collectionWorks[currentIndex + 1];

    const collectionPage =
        artwork.collection === "Prerequisite"
            ? "collections/prerequisite.html"
            : "collections/tribulations.html";

    document.getElementById("back-to-collection").href =
        collectionPage;

    document.getElementById("back-to-collection").textContent =
        "← Back to " + artwork.collection;

    document.getElementById("previous-artwork").href =
        `artwork.html?id=${previous.id}`;

    document.getElementById("previous-artwork").textContent =
        `← ${previous.title}`;

    document.getElementById("next-artwork").href =
        `artwork.html?id=${next.id}`;

    document.getElementById("next-artwork").textContent =
        `${next.title} →`;

});