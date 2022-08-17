import config from '~/config';

// File này dùng để Route (điều hướng) các web con trong dự án
import { DefaultLayout2 } from '~/components/Layout'; 

import Home from '~/pages/Home';
import Store from '~/pages/Store';
import ProductsDetail from '~/pages/ProductsDetail';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Admin from '~/pages/Admin';
import Search from '~/pages/Search';
import ClutchBag from '~/pages/ClutchBag';


// Phần Store và phần Checkout có thêm 1 layout riêng 
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.admin, component: Admin },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.search, component: Search },
  { path: config.routes.store, component: Store, layout: DefaultLayout2 },
  { path: config.routes.clutch, component: ClutchBag },

  // { path: config.routes.checkout, component: Checkout, layout: DefaultLayout2 },
  // { path: config.routes.productsdetail, component: ProductsDetail, layout: DefaultLayout2 },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
