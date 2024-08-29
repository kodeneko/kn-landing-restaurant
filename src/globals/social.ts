import { Menu, Opt } from "@models/user";
import { t } from "i18next";

const optInsta: Opt = {
  id: 'insta',
  label: t('label.insta'),
  href: '#',
  icon: 'fa-brands fa-instagram'
};

const optTwitter: Opt = {
  id: 'twit',
  label: t('label.twit'),
  href: '#',
  icon: 'fa-brands fa-twitter'
};

const optTiktok: Opt = {
  id: 'tiktok',
  label: t('label.tiktok'),
  href: '#',
  icon: 'fa-brands fa-tiktok'
};

const socialList: Menu = [
  optInsta,
  optTwitter,
  optTiktok
]

export {
  optInsta,
  optTwitter,
  optTiktok,
  socialList
}