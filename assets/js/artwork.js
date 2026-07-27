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

src="${artwork.image.large}"

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



<p>

<strong>
Availability
</strong>

${artwork.availability}

</p>


</div>


<a href="contact.html"
class="inquiry-button">

Request Information

</a>


</div>



</section>



`;



}

);
