import { MenuOpt, Opt } from '@models/index';
import { t } from 'i18next';

import {
  dishesDessert,
  dishesDonburi,
  dishesDrinks,
  dishesRamen,
  dishesStarters
} from './dish';
import { Paths } from './paths';
import { Sections } from './sections';

const optStarters: MenuOpt = {
  dishes: dishesStarters,
  id: 'starters',
  label: t('label.starters')
};

const optRamen: MenuOpt = {
  dishes: dishesRamen,
  id: 'ramen',
  label: t('label.ramen')
};

const optDonburi: MenuOpt = {
  dishes: dishesDonburi,
  id: 'donburi',
  label: t('label.donburi')
};

const optDessert: MenuOpt = {
  dishes: dishesDessert,
  id: 'dessert',
  label: t('label.dessert')
};

const optDrinks: MenuOpt = {
  dishes: dishesDrinks,
  id: 'drinks',
  label: t('label.drinks')
};

const optMenu: Opt = {
  href: Paths.Menu,
  id: Sections.Menu,
  label: t('label.menu')
};

const optLocation: Opt = {
  href: Paths.Location,
  id: Sections.Location,
  label: t('label.location')
};

const optDelivery: Opt = {
  href: Paths.Delivery,
  id: Sections.Delivery,
  label: t('label.delivery')
};

const optContact: Opt = {
  href: Paths.Contact,
  id: Sections.Contact,
  label: t('label.contact')
};

const restMenu: MenuOpt[] = [
  optStarters,
  optRamen,
  optDonburi,
  optDessert,
  optDrinks
];

const mainMenu: Opt[] = [
  optMenu,
  optLocation,
  optDelivery,
  optContact
];

const restDefaultSelOpt = optRamen;

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
