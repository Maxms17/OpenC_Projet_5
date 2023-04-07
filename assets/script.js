
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

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

const img = slide.map(slide => slide.image);
const tag = slide.map(slide => slide.tagLine);

let currentImage = 0
let currentTag = 0

prevButton.addEventListener("click", () => {
	if (currentImage == 0){
		currentImage =  3
		currentTag =  3
	}
	else {
		currentImage = currentImage - 1
		currentTag = currentTag - 1
	}
	changeBanniere()
});
	
nextButton.addEventListener("click", () => {
	if (currentImage == 3){
		currentImage =  0
		currentTag =  0
	}
	else {
		currentImage = currentImage + 1
		currentTag = currentTag + 1
	}
	changeBanniere()
});

const img_banner= document.getElementById("img_banner")
const text_banner= document.getElementById("text_banner")

function changeBanniere(){
    //img_banner.src = "' + "./assets/images/slideshow/" + img[currentImage] + '"
	text_banner.innerHTML = tag[currentTag]
}

changeBanniere()
