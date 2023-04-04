const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");
const dots = document.getElementById("dots");
const banner = document.getElementById("banner");
	
const slide = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
	
const nb_dot = slide.length;
const img = slide.map(slide => slide.image);
const tag = slide.map(slide => slide.tagLine);
	
let currentImage = 0
let currentTag = 0
	
prevButton.addEventListener("click", () => {
	// alert("left");
	if (currentImage == 0){
		currentImage =  3
		currentTag =  3
	}
	else {
		currentImage = currentImage - 1
		currentTag = currentTag - 1
	}
	ajoutimg()
});
	
nextButton.addEventListener("click", () => {
	// alert("right");
	if (currentImage == 3){
		currentImage =  0
		currentTag =  0
	}
	else {
		currentImage = currentImage + 1
		currentTag = currentTag + 1
	}
		
	ajoutimg()
});
	
const node = document.createElement('div')
	
function ajoutimg() {
	node.innerHTML = '<img class="banner-img" src="' + "./assets/images/slideshow/" + img[currentImage] + '" alt="Banner Print-it" />'
		+ '<p>' + tag[currentTag] + '</p>'
	banner.appendChild(node)
}
	
ajoutimg()