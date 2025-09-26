const Paths = {
  Contact: '/contact',
  Cookies: '/cookies',
  Delivery: '/delivery',
  Legal: '/legal',
  Location: '/location',
  Menu: '/menu',
  Privacy: '/privacy'
} as const;

const PathList: string[] = Object.values(Paths);

export { PathList, Paths };
