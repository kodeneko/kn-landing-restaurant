import { Menu, Opt } from '@models/user';
import { t } from 'i18next';

const optInsta: Opt = {
  href: '#',
  icon: 'fa-brands fa-instagram',
  id: 'insta',
  label: t('label.insta')
};

const optTwitter: Opt = {
  href: '#',
  icon: 'fa-brands fa-twitter',
  id: 'twit',
  label: t('label.twit')
};

const optTiktok: Opt = {
  href: '#',
  icon: 'fa-brands fa-tiktok',
  id: 'tiktok',
  label: t('label.tiktok')
};

const socialList: Menu = [
  optInsta,
  optTwitter,
  optTiktok
];

export {
  optInsta,
  optTiktok,
  optTwitter,
  socialList
};
