const slides = [
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

// Liste des variables nécessaires au carrousel
const arrowRight = document.getElementById('next');
const arrowLeft = document.getElementById('prev');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dots .dot');

let currentSlide = 0; // Index du slide actuel

// Changement d'affichage au clic sur la flèche droite
arrowRight.addEventListener('click', () => {
    console.log('Clic flèche droite');
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
});

// Changement d'affichage au clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
    console.log('Clic flèche gauche');
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
});

function updateSlide(index) {
    currentSlide = index;

    // // Mettre à jour le bullet, l'image et le texte correspondant à la slide actuelle
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === currentSlide);
    });
    bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
}