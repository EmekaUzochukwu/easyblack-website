/* =========================================

   EASYBLACK
   Featured Gallery Generator

   Reads from artworks.js

========================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const gallery =
            document.getElementById(
                "featured-gallery"
            );


        // Stop if gallery container does not exist

        if (!gallery) {

            return;

        }



        /*
            Select featured artworks only
        */

        const featuredWorks =
            artworks.filter(
                artwork => artwork.featured === true
            );



        /*
            Generate artwork cards
        */


        featuredWorks.forEach(
            artwork => {



                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "artwork-card";



                card.innerHTML = `

                    <a 
                    href="artwork.html?id=${artwork.id}"
                    class="artwork-link"
                    >


                        <div class="artwork-image">


                            <img

                            src="${artwork.image}"

                            srcset="
                            ${artwork.image} 700w,
                            ${artwork.image} 1200w,
                            ${artwork.image} 2000w
                            "

                            sizes="
                            (max-width:700px) 90vw,
                            (max-width:1200px) 45vw,
                            35vw
                            "

                            alt="${artwork.title} by Easyblack"

                            loading="lazy"

                            >


                        </div>



                        <div class="artwork-details">


                            <h3>
                            ${artwork.title}
                            </h3>


                            <p>

                            ${artwork.year}

                            ·

                            ${artwork.medium}

                            </p>


                        </div>


                    </a>

                `;



                gallery.appendChild(card);



            }

        );



    }

);
