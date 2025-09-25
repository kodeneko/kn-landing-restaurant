const Sections = {
  Contact: 'contact',
  Delivery: 'delivery',
  Location: 'location',
  Menu: 'menu'
} as const;

const SectionList: string[] = Object.values(Sections);

export { SectionList, Sections };
