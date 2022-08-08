// File này dùng để Route (điều hướng) các web con trong dự án
import { DefaultLayout2 } from '~/components/Layout'; 

import Home from '~/pages/Home';
import Store from '~/pages/Store';
import ProductsDetail from '~/pages/ProductsDetail';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Admin from '~/pages/Admin';
import Search from '~/pages/Search';

// Phần Store và phần Checkout có thêm 1 layout riêng 

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
  { path: '/search', component: Search },
  { path: '/checkout', component: Checkout, layout: DefaultLayout2 },
  { path: '/store', component: Store, layout: DefaultLayout2 },
  { path: '/productsdetail', component: ProductsDetail, layout: DefaultLayout2 },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
