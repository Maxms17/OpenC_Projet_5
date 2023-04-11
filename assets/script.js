const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

const img_banner= document.getElementById("img_banner")
const text_banner= document.getElementById("text_banner")

const dot = document.querySelectorAll(".dot")
const dots = Array.prototype.slice.call(dot);

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

let currentSlide = 0

prevButton.addEventListener("click", () => {
	if (currentSlide == 0){
		currentSlide =  3
	}
	else {
		currentSlide -= 1
	}
	changeBanniere()
	changeDot(currentSlide)
});
	
nextButton.addEventListener("click", () => {
	if (currentSlide == 3){
		currentSlide =  0
	}
	else {
		currentSlide += 1
	}
	changeBanniere()
	changeDot(currentSlide)
});

function changeBanniere(){
    img_banner.src = `./assets/images/slideshow/${slide[currentSlide].image}`
	text_banner.innerHTML = slide[currentSlide].tagLine
}

function changeDot(currentSlide){
	dots.map((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot_selected")
        }
        else{ dot.classList.remove("dot_selected") }
    })
}


