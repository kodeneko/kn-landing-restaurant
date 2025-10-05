import Dish from '@models/Dish';

interface Opt {
  id: string;
  label: string;
  href?: string;
  icon?: string;
}

interface MenuOpt extends Opt { dishes: Dish[] }

export type { MenuOpt, Opt };
