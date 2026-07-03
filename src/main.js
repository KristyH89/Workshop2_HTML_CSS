import './style.css'

import { asset, route } from './utils/path.js';

console.log('BASE:', import.meta.env.BASE_URL);
console.log('IMAGE:', asset('images/logoindex4.jpg'));
console.log('ROUTE:', route('food.html'));

const heroImages = [
  asset("images/recipe-photos/kanelbullar.jpeg"),
  asset("images/recipe-photos/pasta-carbonara-kantarel.jpeg"),
  asset("images/recipe-photos/tiramisu.jpeg"),
  asset("images/recipe-photos/homemade-kebab-and-pita.jpeg"),
  asset("images/recipe-photos/potatogratin.jpeg"),
  asset("images/recipe-photos/vildsvin-rib-med-rod-kal-och-potatismos.jpeg"),
  asset("images/recipe-photos/midsommar-tarta-del.jpeg"),
  asset("images/recipe-photos/noodles.jpeg"),
  asset("images/recipe-photos/gevulde-speculaas.jpeg"),
  asset("images/recipe-photos/gnocchi.jpg"),
  asset("images/recipe-photos/aardbeientiramisu.jpg"),
  asset("images/recipe-photos/linzenzalmsalade.jpg"),
  asset("images/recipe-photos/more-healthier-mac-and-cheese.jpeg"),
  asset("images/recipe-photos/orzovega.jpg"),
  asset("images/recipe-photos/pennelinzen.jpg"),
  asset("images/recipe-photos/pepernotencheesecake.jpg"),
  asset("images/recipe-photos/salmonorzo.jpg"),
  asset("images/recipe-photos/sushibowl.jpg"),
  asset("images/recipe-photos/strawberrycheesecake.jpeg"),
  asset("images/recipe-photos/sweetpotatosalad.jpg"),
  asset("images/recipe-photos/appeltaartonbijtje.jpg"),
  asset("images/recipe-photos/burruto.jpg"),




];

const heroImage = document.getElementById("hero-image");

if (heroImage) {
  let currentIndex = 0;

  heroImage.src = heroImages[0];
  heroImage.onload = () => heroImage.classList.add("fade-in");
  if (heroImage.complete) heroImage.classList.add("fade-in");

  setInterval(() => {
    heroImage.classList.remove("fade-in");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % heroImages.length;
      const next = new Image();
      next.src = heroImages[currentIndex];
      next.onload = () => {
        heroImage.src = next.src;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => heroImage.classList.add("fade-in"));
        });
      };
    }, 1000);
  }, 4000);
}