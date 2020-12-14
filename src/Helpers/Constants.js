export const navItems = [
  {
    label: 'Dashboard',
    path: 'dashboard',

    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Listings',
    path: 'createHotel',

    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Propert overview',
    path: 'propertOverview',

    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Reservations',
    path: 'bookings',

    allowedRoles: ['admin']
  },
  {
    label: 'Inventory and rates',
    path: 'ratesAndAvailab',

    allowedRoles: ['admin']
  },
  {
    label: 'Reviews',
    path: 'reviews',

    allowedRoles: ['user', 'admin']
  },

  {
    label: 'Promotions',
    path: 'promotions',

    allowedRoles: ['admin']
  },
  {
    label: 'Account settings',
    path: 'account',

    allowedRoles: ['user', 'admin']
  }
]
