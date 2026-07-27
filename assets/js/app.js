/* =========================================

   EASYBLACK
   Main Application Logic

========================================= */



document.addEventListener(
    "DOMContentLoaded",
    () => {



/* =========================================
   MOBILE MENU
========================================= */


const menuButton =
document.querySelector(".menu-button");


const navigation =
document.querySelector(".main-nav");



if(menuButton && navigation){


    menuButton.addEventListener(
        "click",
        () => {


            navigation.classList.toggle(
                "active"
            );


            menuButton.classList.toggle(
                "open"
            );


        }
    );





    /*
        Close menu after selecting a link
    */


    const navLinks =
    document.querySelectorAll(
        ".main-nav a"
    );


    navLinks.forEach(
        link => {


            link.addEventListener(
                "click",
                () => {


                    navigation.classList.remove(
                        "active"
                    );


                    menuButton.classList.remove(
                        "open"
                    );


                }
            );


        }
    );



}






/* =========================================
   HEADER SCROLL EFFECT
========================================= */


const header =
document.querySelector(
    ".site-header"
);



if(header){


    window.addEventListener(
        "scroll",
        () => {


            if(window.scrollY > 80){


                header.style.background =
                "rgba(11,11,11,0.92)";


                header.style.backdropFilter =
                "blur(10px)";


            }

            else {


                header.style.background =
                "transparent";


                header.style.backdropFilter =
                "none";


            }


        }
    );


}






/* =========================================
   SCROLL REVEAL SYSTEM
========================================= */


const revealElements =
document.querySelectorAll(
    `
    .artwork-card,
    .section-heading h2,
    .narrative-section h2,
    .collections-section h2,
    .exhibitions-section h2,
    .biography-section h2,
    .contact-section h2
    `
);




const revealObserver =
new IntersectionObserver(
    entries => {


        entries.forEach(
            entry => {


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "visible"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );


                }


            }
        );


    },
    {

        threshold:0.2

    }
);




revealElements.forEach(
    element => {


        revealObserver.observe(
            element
        );


    }
);






/* =========================================
   ACTIVE SECTION NAVIGATION
========================================= */


const sections =
document.querySelectorAll(
    "section[id]"
);



const navItems =
document.querySelectorAll(
    ".main-nav a"
);



const sectionObserver =
new IntersectionObserver(
    entries => {


        entries.forEach(
            entry => {


                if(entry.isIntersecting){


                    navItems.forEach(
                        link => {


                            link.classList.remove(
                                "active"
                            );


                            if(
                                link.getAttribute("href")
                                ===
                                "#" + entry.target.id
                            ){


                                link.classList.add(
                                    "active"
                                );


                            }


                        }
                    );


                }


            }
        );


    },
    {

        threshold:0.45

    }
);




sections.forEach(
    section => {


        sectionObserver.observe(
            section
        );


    }
);





    }

);
