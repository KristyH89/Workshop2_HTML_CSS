import './style.css'

import { asset, route } from './utils/path.js';

console.log('BASE:', import.meta.env.BASE_URL);
console.log('IMAGE:', asset('images/logoindex4.jpg'));
console.log('ROUTE:', route('food.html'));

const heroImages = [
  asset("images/recipe-photos/main-dishes.jpeg"),
  asset("images/recipe-photos/easy.jpeg"),
  asset("images/recipe-photos/baking-desserts.jpeg"),
  asset("images/recipe-photos/quick-easy.jpeg"),
  asset("images/recipe-photos/wild-game.jpeg")
];

const heroImage = document.getElementById("hero-image");

if (heroImage) {
  let currentIndex = 0;

  heroImage.src = heroImages[0];
  heroImage.classList.add("fade-in");

  setInterval(() => {
    heroImage.classList.remove("fade-in");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % heroImages.length;
      heroImage.src = heroImages[currentIndex];
      heroImage.classList.add("fade-in");
    }, 400);
  }, 4000);
}