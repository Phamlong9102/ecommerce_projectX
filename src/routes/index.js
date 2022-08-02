// File này dùng để Route (điều hướng) các web con trong dự án
import { DefaultLayout2 } from '~/components/Layout'; 

import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Admin from '~/pages/Admin';
import Search from '~/pages/Search';

// Phần products và phần checkout có thêm 1 layout riêng 

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
  { path: '/search', component: Search },
  { path: '/checkout', component: Checkout, layout: DefaultLayout2 },
  { path: '/products', component: Products, layout: DefaultLayout2 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
