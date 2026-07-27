/* =========================================

EASYBLACK
Collection Generator

========================================= */


function loadCollection(collectionName){



const gallery =
document.getElementById(
"collection-gallery"
);



if(!gallery){

return;

}




const collectionWorks =
artworks.filter(

artwork =>

artwork.collection === collectionName

);





collectionWorks.forEach(

artwork => {



const card =
document.createElement(
"article"
);



card.className =
"artwork-card";




card.innerHTML = `


<a href="../artwork.html?id=${artwork.id}">


<div class="artwork-image">


<img

src="../${artwork.image}"

alt="${artwork.title}"

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
