import {t} from 'i18next';
import { Menu, Opt } from "@models/index";

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
  optMenu,
  optLocation,
  optDelivery,
  optContact,
  mainMenu
}