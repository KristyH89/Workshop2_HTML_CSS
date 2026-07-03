import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'path'

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || !!process.env.VERCEL_URL
const base = isVercel ? '/' : '/Kristys_Cooking_Adventures/'
const outDir = isVercel ? 'dist' : 'docs'

console.log('VERCEL ENV:', process.env.VERCEL)
console.log('VERCEL_URL:', process.env.VERCEL_URL)
console.log('BASE IS:', base)

export default defineConfig({
  base,
  root: '.',

  plugins: [
    tailwindcss(),

    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: { base },
      helpers: {
        route: (path) => `${base}${path}`
      }
    }),

    ViteImageOptimizer({
      includePublic: true,
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { lossless: false, quality: 80 },
    }),
  ],

 build: {
  outDir,
  emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        food: resolve(__dirname, 'food.html'),
        contact: resolve(__dirname, 'contact.html'),

        rhubarbCake: resolve(__dirname, 'recipe/rhubarb-cake.html'),
        noodles: resolve(__dirname, 'recipe/noodles.html'),
        GevuldeSpeculaas: resolve(__dirname, 'recipe/Gevulde-speculaas.html'),
        healthierMacAndCheese: resolve(__dirname, 'recipe/healthier-mac-and-cheese.html'),
        homemadeKebabAndPita: resolve(__dirname, 'recipe/homemade-kebab-and-pita.html'),
        homemadeQuarkpizza: resolve(__dirname, 'recipe/homemade-quarkpizza.html'),
        kanelbullar: resolve(__dirname, 'recipe/kanelbullar.html'),
        mediterraneanSweetPotatoSalad: resolve(__dirname, 'recipe/mediterranean-sweet-potato-salad.html'),
        nobakeMidsommarTarta: resolve(__dirname, 'recipe/nobake-midsommar-tarta.html'),
        pastaCarbonara: resolve(__dirname, 'recipe/pasta-carbonara.html'),
        patrch: resolve(__dirname, 'recipe/patrch.html'),
        potatogratin: resolve(__dirname, 'recipe/potatogratin.html'),
        pulledVildsvin: resolve(__dirname, 'recipe/pulled-vildsvin.html'),
        quarkPancakes: resolve(__dirname, 'recipe/quark-pancakes.html'),
        tiramisu: resolve(__dirname, 'recipe/tiramisu.html'),
        vildsvinStamppotWortels: resolve(__dirname, 'recipe/vildsvin-stamppot-wortels.html'),
        vildsvinribRedCabbage: resolve(__dirname, 'recipe/vildsvinrib-red-cabbage.html'),
        wrapPizza: resolve(__dirname, 'recipe/wrap-pizza.html'),
        orzoSmokedSalmonVegetables: resolve(__dirname, 'recipe/orzo-smoked-salmon-vegetables.html'),
        gnocchiBaconVegetables: resolve(__dirname, 'recipe/gnocchi-bacon-vegetables.html'),

        bakingDesserts: resolve(__dirname, 'categories/baking-desserts.html'),
        easy: resolve(__dirname, 'categories/easy.html'),
        mainDishes: resolve(__dirname, 'categories/main-dishes.html'),
        quickEasy: resolve(__dirname, 'categories/quick-easy.html'),
        slowSpecial: resolve(__dirname, 'categories/slow-special.html'),
        wildGame: resolve(__dirname, 'categories/wild-game.html'),
      },
    },
  },
})