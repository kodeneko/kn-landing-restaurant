const Paths = {
  Contact: '/contact',
  Delivery: '/delivery',
  Location: '/location',
  Menu: '/menu'
} as const;

const PathList: string[] = Object.values(Paths);

export { PathList, Paths };
