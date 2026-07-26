/* =========================================

   EASYBLACK
   Narrative Illusionism

   Main JavaScript

========================================= */



document.addEventListener("DOMContentLoaded", () => {



    /* =========================================
       Scroll Reveal Animation

       Adds .visible class to sections
       when they enter the viewport

    ========================================= */


    const sections = document.querySelectorAll(".section");


    const revealOptions = {

        threshold: 0.15,

        rootMargin: "0px 0px -80px 0px"

    };



    const revealObserver = new IntersectionObserver(

        (entries, observer) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add("visible");


                    observer.unobserve(entry.target);


                }


            });


        },

        revealOptions

    );



    sections.forEach(section => {

        revealObserver.observe(section);

    });







    /* =========================================
       Header Background on Scroll

       Keeps navigation readable

    ========================================= */


    const header = document.querySelector(".site-header");



    window.addEventListener("scroll", () => {



        if (window.scrollY > 80) {


            header.classList.add("scrolled");


        } else {


            header.classList.remove("scrolled");


        }


    });







    /* =========================================
       Smooth Anchor Scrolling

    ========================================= */


    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );



    anchorLinks.forEach(link => {



        link.addEventListener("click", function(event) {



            const targetID = this.getAttribute("href");



            const target = document.querySelector(targetID);



            if (target) {


                event.preventDefault();



                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


            }


        });


    });







    /* =========================================
       Lazy Image Enhancement

       Adds loaded class after images load

    ========================================= */


    const images = document.querySelectorAll("img");



    images.forEach(image => {



        if (image.complete) {


            image.classList.add("loaded");


        } else {



            image.addEventListener(

                "load",

                () => {

                    image.classList.add("loaded");

                }

            );


        }


    });







    /* =========================================
       External Links

       Opens social links safely

    ========================================= */


    const externalLinks = document.querySelectorAll(

        'a[target="_blank"]'

    );



    externalLinks.forEach(link => {


        link.setAttribute(

            "rel",

            "noopener noreferrer"

        );


    });



});
