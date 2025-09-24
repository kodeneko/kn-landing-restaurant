interface Opt {
  id: string;
  label: string;
  href?: string;
  icon?: string;
}

type Menu = Opt[];

export type {
  Menu,
  Opt
};
