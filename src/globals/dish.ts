import Dish from '@models/Dish';
import { t } from 'i18next';

const picFolder = 'dishes/';

// STARTERS

const starterWakame: Dish = {
  desc: t('dish.starterWakame.desc'),
  id: 'starterWakame',
  pic: picFolder + 'starter-wakame.png',
  price: 12.3,
  title: t('dish.starterWakame.title')
};
const starterYakitori: Dish = {
  desc: t('dish.starterYakitori.desc'),
  id: 'starterYakitori',
  pic: picFolder + 'starter-yakitori.png',
  price: 12.3,
  title: t('dish.starterYakitori.title')
};
const starterBao: Dish = {
  desc: t('dish.starterBao.desc'),
  id: 'starterBao',
  pic: picFolder + 'starter-bao.png',
  price: 12.3,
  title: t('dish.starterBao.title')
};
const starterGyoza: Dish = {
  desc: t('dish.starterGyoza.desc'),
  id: 'starterGyoza',
  pic: picFolder + 'starter-gyoza.png',
  price: 12.3,
  title: t('dish.starterGyoza.title')
};
const starterTempura: Dish = {
  desc: t('dish.starterTempura.desc'),
  id: 'starterTempura',
  pic: picFolder + 'starter-tempura.png',
  price: 12.3,
  title: t('dish.starterTempura.title')
};
const starterKorokke: Dish = {
  desc: t('dish.starterKorokke.desc'),
  id: 'starterKorokke',
  pic: picFolder + 'starter-korokke.png',
  price: 12.3,
  title: t('dish.starterKorokke.title')
};
const starterEkonomiyaki: Dish = {
  desc: t('dish.starterEkonomiyaki.desc'),
  id: 'starterEkonomiyaki',
  pic: picFolder + 'starter-ekonomiyaki.png',
  price: 12.3,
  title: t('dish.starterEkonomiyaki.title')
};
const starterShrimps: Dish = {
  desc: t('dish.starterShrimps.desc'),
  id: 'starterShrimps',
  pic: picFolder + 'starter-shrimps.png',
  price: 12.3,
  title: t('dish.starterShrimps.title')
};
const starterTokoyaki: Dish = {
  desc: t('dish.starterTokoyaki.desc'),
  id: 'starterTokoyaki',
  pic: picFolder + 'starter-shritokoyakimps.png',
  price: 12.3,
  title: t('dish.starterTokoyaki.title')
};

// RAMEN

const ramenBeef: Dish = {
  desc: t('dish.ramenBeef.desc'),
  id: 'ramenBeef',
  pic: picFolder + 'ramen-beef.png',
  price: 12.3,
  title: t('dish.ramenBeef.title')
};
const ramenCurry: Dish = {
  desc: t('dish.ramenCurry.desc'),
  id: 'ramenCurry',
  pic: picFolder + 'ramen-curry.png',
  price: 12.3,
  title: t('dish.ramenCurry.title')
};
const ramenKids: Dish = {
  desc: t('dish.ramenKids.desc'),
  id: 'ramenKids',
  pic: picFolder + 'ramen-curry.png',
  price: 12.3,
  title: t('dish.ramenKids.title')
};
const ramenMushroms: Dish = {
  desc: t('dish.ramenMushroms.desc'),
  id: 'ramenMushroms',
  pic: picFolder + 'ramen-mushroms.png',
  price: 12.3,
  title: t('dish.ramenMushroms.title')
};
const ramenPineapple: Dish = {
  desc: t('dish.ramenPineapple.desc'),
  id: 'ramenPineapple',
  pic: picFolder + 'ramen-pineapple.png',
  price: 12.3,
  title: t('dish.ramenPineapple.title')
};
const ramenPork: Dish = {
  desc: t('dish.ramenPork.desc'),
  id: 'ramenPineaple',
  pic: picFolder + 'ramen-pork.png',
  price: 12.3,
  title: t('dish.ramenPork.title')
};
const ramenRice: Dish = {
  desc: t('dish.ramenRice.desc'),
  id: 'ramenRice',
  pic: picFolder + 'ramen-rice.png',
  price: 12.3,
  title: t('dish.ramenRice.title')
};

// DONBURI

const donburiBeef: Dish = {
  desc: t('dish.donburiBeef.desc'),
  id: 'donburiBeef',
  pic: picFolder + 'donburi-beef.png',
  price: 12.3,
  title: t('dish.donburiBeef.title')
};
const donburiChiken: Dish = {
  desc: t('dish.donburiChiken.desc'),
  id: 'donburiChiken',
  pic: picFolder + 'donburi-chiken.png',
  price: 12.3,
  title: t('dish.donburiChiken.title')
};
const donburiPork: Dish = {
  desc: t('dish.donburiPork.desc'),
  id: 'donburiPork',
  pic: picFolder + 'donburi-pork.png',
  price: 12.3,
  title: t('dish.donburiPork.title')
};
const riceEggs: Dish = {
  desc: t('dish.riceEggs.desc'),
  id: 'riceEggs',
  pic: picFolder + 'rice-eggs.png',
  price: 12.3,
  title: t('dish.riceEggs.title')
};
const riceVegetables: Dish = {
  desc: t('dish.riceVegetables.desc'),
  id: 'riceVegetables',
  pic: picFolder + 'rice-vegetables.png',
  price: 12.3,
  title: t('dish.riceVegetables.title')
};

// DESSERT

const dessertBingsu: Dish = {
  desc: t('dish.dessertBingsu.desc'),
  id: 'dessertBingsu',
  pic: picFolder + 'dessert-bingsu.png',
  price: 12.3,
  title: t('dish.dessertBingsu.title')
};
const dessertMatchaChoco: Dish = {
  desc: t('dish.dessertMatchaChoco.desc'),
  id: 'dessertMatchaChoco',
  pic: picFolder + 'dessert-matcha-choco.png',
  price: 12.3,
  title: t('dish.dessertMatchaChoco.title')
};
const dessertMochi: Dish = {
  desc: t('dish.dessertMochi.desc'),
  id: 'dessertMochi',
  pic: picFolder + 'dessert-mochi.png',
  price: 12.3,
  title: t('dish.dessertMochi.title')
};
const dessertSweets: Dish = {
  desc: t('dish.dessertSweets.desc'),
  id: 'dessertSweets',
  pic: picFolder + 'dessert-sweets.png',
  price: 12.3,
  title: t('dish.dessertSweets.title')
};

// DRINKS
const drinkBeer: Dish = {
  desc: t('dish.drinkBeer.desc'),
  id: 'drinkBeer',
  pic: picFolder + 'drink-beer.png',
  price: 12.3,
  title: t('dish.drinkBeer.title')
};
const drinkBubbleTea: Dish = {
  desc: t('dish.drinkBubbleTea.desc'),
  id: 'drinkBubbleTea',
  pic: picFolder + 'drink-bubble-tea.png',
  price: 12.3,
  title: t('dish.drinkBubbleTea.title')
};
const drinkCoffeeCup: Dish = {
  desc: t('dish.drinkCoffeeCup.desc'),
  id: 'drinkCoffeeCup',
  pic: picFolder + 'drink-coffee-cup.png',
  price: 12.3,
  title: t('dish.drinkCoffeeCup.title')
};
const drinkSake: Dish = {
  desc: t('dish.drinkSake.desc'),
  id: 'drinkSake',
  pic: picFolder + 'drink-sake.png',
  price: 12.3,
  title: t('dish.drinkSake.title')
};
const drinkSoda: Dish = {
  desc: t('dish.drinkSoda.desc'),
  id: 'drinkSoda',
  pic: picFolder + 'drink-soda.png',
  price: 12.3,
  title: t('dish.drinkSoda.title')
};
const drinkSparklingWater: Dish = {
  desc: t('dish.drinkSparklingWater.desc'),
  id: 'drinkSparklingWater',
  pic: picFolder + 'drink-sparkling-water.png',
  price: 12.3,
  title: t('dish.drinkSparklingWater.title')
};
const drinkSpecialCoffee: Dish = {
  desc: t('dish.drinkSpecialCoffee.desc'),
  id: 'drinkSpecialCoffee',
  pic: picFolder + 'drink-special-coffee.png',
  price: 12.3,
  title: t('dish.drinkSpecialCoffee.title')
};
const drinkVineBottle: Dish = {
  desc: t('dish.drinkVineBottle.desc'),
  id: 'drinkVineBottle',
  pic: picFolder + 'drink-vine-bottle.png',
  price: 12.3,
  title: t('dish.drinkVineBottle.title')
};
const drinkWater: Dish = {
  desc: t('dish.drinkWater.desc'),
  id: 'drinkWater',
  pic: picFolder + 'drink-water.png',
  price: 12.3,
  title: t('dish.drinkWater.title')
};

// DISHES COLLECTION

const dishesStarters: Dish[] = [
  starterWakame,
  starterYakitori,
  starterBao,
  starterGyoza,
  starterTempura,
  starterKorokke,
  starterEkonomiyaki,
  starterShrimps,
  starterTokoyaki
];

const dishesRamen: Dish[] = [
  ramenBeef,
  ramenPork,
  ramenCurry,
  ramenRice,
  ramenMushroms,
  ramenPineapple,
  ramenKids
];

const dishesDessert: Dish[] = [
  dessertBingsu,
  dessertMatchaChoco,
  dessertMochi,
  dessertSweets
];

const dishesDonburi: Dish[] = [
  donburiBeef,
  donburiChiken,
  donburiPork,
  riceEggs,
  riceVegetables
];

const dishesDrinks: Dish[] = [
  drinkBeer,
  drinkBubbleTea,
  drinkCoffeeCup,
  drinkSake,
  drinkSoda,
  drinkSparklingWater,
  drinkSpecialCoffee,
  drinkVineBottle,
  drinkWater
];

const restDefaultDishes: Dish[] = dishesRamen;

export {
  dishesDessert,
  dishesDonburi,
  dishesDrinks,
  dishesRamen,
  dishesStarters,
  restDefaultDishes
};
