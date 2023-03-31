const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");
const dots = document.getElementById("dots");

const nb_dot = sequence.length;
const img = slide.map(slide => slide.image);
const tag = slide.map(slide => slide.tagLine);

const slide = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

prevButton.addEventListener("click", () => {
	alert("left");
});
  
nextButton.addEventListener("click", () => {
	alert("right");
});

document.body.appendChild(banner) = '<div>'
    + '<img src="' + slide.image + '" />'
    + '<h2>' + slide.tagLine + '</h2>'
    + '</div>'
	
