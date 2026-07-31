/* =========================================

EASYBLACK
Artwork Page Generator

========================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


const container =
document.getElementById(
"artwork-container"
);



const params =
new URLSearchParams(
window.location.search
);



const artworkID =
params.get("id");



const artwork =
artworks.find(
item =>
item.id === artworkID
);



if(!artwork){


container.innerHTML = `

<section class="error-page">

<h1>
Artwork Not Found
</h1>


<a href="index.html">
Return Home
</a>

</section>

`;

return;

}





container.innerHTML = `


<section class="single-artwork">


<div class="artwork-large-image">


<img

src="${artwork.image}"

alt="${artwork.title} by Easyblack"

>


</div>





<div class="artwork-information">


<h1>

${artwork.title}

</h1>



<p class="collection">

${artwork.collection}

</p>



<div class="details">


<p>

<strong>
Year
</strong>

${artwork.year}

</p>



<p>

<strong>
Medium
</strong>

${artwork.medium}

</p>



<p>

<strong>
Dimensions
</strong>

${artwork.dimensions}

</p>



${
artwork.collection === "Prerequisite"

?

`
<p>

<strong>
Availability
</strong>

${artwork.availability}

</p>
`

:

""

}


</div>


<a 
href="contact.html?artwork=${encodeURIComponent(artwork.title)}"
class="inquiry-button">

Request Information

</a>


</div>

</section>

<div class="artwork-navigation">

    <a
        id="back-to-collection"
        class="back-link"
        href="#">
        ← Back to Collection
    </a>

</div>

<div class="artwork-pagination">

    <a
        id="previous-artwork"
        href="#">
        ← Previous Artwork
    </a>

    <a
        id="next-artwork"
        href="#">
        Next Artwork →
    </a>

</div>

`;

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



}

);
