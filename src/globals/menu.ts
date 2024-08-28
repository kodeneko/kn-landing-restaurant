import {t} from 'i18next';
import { Menu, Opt } from "@models/index";

const optStarters: Opt = {
  id: 'starters',
  label: t('label.starters')
}

const optRamen: Opt = {
  id: 'ramen',
  label: t('label.ramen')
}

const optDonburi: Opt = {
  id: 'donburi',
  label: t('label.donburi')
}

const optDessert: Opt = {
  id: 'dessert',
  label: t('label.dessert')
}

const optDrinks: Opt = {
  id: 'drinks',
  label: t('label.drinks'),
}

const restMenu: Menu = [
  optStarters,
  optRamen,
  optDonburi,
  optDessert,
  optDrinks
]

const restDefaultSelOpt = restMenu.find(r => r.id === optRamen.id);

const optMenu: Opt = {
  id: 'menu',
  label: t('label.menu'),
  href: '#menu'
}

const optLocation: Opt = {
  id: 'location',
  label: t('label.location'),
  href: '#location'
}

const optDelivery: Opt = {
  id: 'delivery',
  label: t('label.delivery'),
  href: '#delivery'
}

const optContact: Opt = {
  id: 'contact',
  label: t('label.contact'),
  href: '#contact'
}

const mainMenu: Menu = [
  optMenu,
  optLocation,
  optDelivery,
  optContact
]

export {
  // Restaurant Menu
  optStarters,
  optRamen,
  optDonburi,
  optDessert,
  optDrinks,
  restMenu,
  restDefaultSelOpt,

  // Main Menu
  optMenu,
  optLocation,
  optDelivery,
  optContact,
  mainMenu
}