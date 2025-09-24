import { Menu, Opt } from '@models/index';
import { t } from 'i18next';

const optStarters: Opt = {
  id: 'starters',
  label: t('label.starters')
};

const optRamen: Opt = {
  id: 'ramen',
  label: t('label.ramen')
};

const optDonburi: Opt = {
  id: 'donburi',
  label: t('label.donburi')
};

const optDessert: Opt = {
  id: 'dessert',
  label: t('label.dessert')
};

const optDrinks: Opt = {
  id: 'drinks',
  label: t('label.drinks')
};

const restMenu: Menu = [
  optStarters,
  optRamen,
  optDonburi,
  optDessert,
  optDrinks
];

const restDefaultSelOpt = restMenu.find((r) => r.id === optRamen.id);

const optMenu: Opt = {
  href: '#menu',
  id: 'menu',
  label: t('label.menu')
};

const optLocation: Opt = {
  href: '#location',
  id: 'location',
  label: t('label.location')
};

const optDelivery: Opt = {
  href: '#delivery',
  id: 'delivery',
  label: t('label.delivery')
};

const optContact: Opt = {
  href: '#contact',
  id: 'contact',
  label: t('label.contact')
};

const mainMenu: Menu = [
  optMenu,
  optLocation,
  optDelivery,
  optContact
];

export {
  mainMenu,
  optContact,
  optDelivery,
  optDessert,
  optDonburi,
  optDrinks,
  optLocation,
  // Main Menu
  optMenu,
  optRamen,
  // Restaurant Menu
  optStarters,
  restDefaultSelOpt,
  restMenu
};
