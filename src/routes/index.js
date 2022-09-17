import config from '~/config';

import HomeLogIn from '~/pages/Home/Home';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart/Cart';
import Search from '~/pages/Search';
import ClutchBag from '~/pages/ProductPage/ClutchBag';
import OrangeAirsuit from '~/pages/ProductPage/OrangeAirsuit'; 
import OrangeSandal from '~/pages/ProductPage/OrangeSandal';
import BlueSuit from '~/pages/ProductPage/BlueSuit';
import OrangeWeil from '~/pages/ProductPage/OrangeWeil';
import WhitePurse from '~/pages/ProductPage/WhitePurse';  
import RedSuit from '~/pages/ProductPage/RedSuit';
import GoldenSandals from '~/pages/ProductPage/GoldenSandals';
import MissionBag from '~/pages/ProductPage/MissionBag';
import CityMiniBag from '~/pages/ProductPage/CityMiniBag';
import ShoulderBag from '~/pages/ProductPage/ShoulderBag';
import DrawstringBag from '~/pages/ProductPage/DrawstringBag';
import AdministratorProducts from '~/pages/Administrartor/AdministratorProducts'; 
import AdministratorUsers from '~/pages/Administrartor/AdministratorUsers'; 
import Clothes from '~/pages/Categories/Clothes'
import Bags from '~/pages/Categories/Bags'
import HighHeels from '~/pages/Categories/HighHeels'
import Wallet from '~/pages/Categories/Wallet'
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Checkout from '~/pages/Checkout/Checkout';

const publicRoutes = [
  { path: config.routes.home_login, component: HomeLogIn },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.search, component: Search },
  { path: config.routes.clutch_bag, component: ClutchBag },
  { path: config.routes.orange_airsuit, component: OrangeAirsuit },
  { path: config.routes.orange_sandal, component: OrangeSandal },
  { path: config.routes.blue_suit, component: BlueSuit },
  { path: config.routes.orange_weil, component: OrangeWeil },
  { path: config.routes.white_purse, component: WhitePurse },
  { path: config.routes.red_suit, component: RedSuit },
  { path: config.routes.golden_sandals, component: GoldenSandals },
  { path: config.routes.mission_bag, component: MissionBag },
  { path: config.routes.city_mini_bag, component: CityMiniBag },
  { path: config.routes.shoulder_bag, component: ShoulderBag },
  { path: config.routes.drawstring_bag, component: DrawstringBag },
  { path: config.routes.admin_products, component: AdministratorProducts, layout : null },
  { path: config.routes.admin_users, component: AdministratorUsers, layout : null },
  { path: config.routes.store, component: Store },
  { path: config.routes.category_clothes, component: Clothes }, 
  { path: config.routes.category_bags, component: Bags }, 
  { path: config.routes.category_highheels, component: HighHeels }, 
  { path: config.routes.category_wallet, component: Wallet }, 
  {path: config.routes.checkout, component: Checkout}, 
  {path: config.routes.login, component: Login, layout: null}, 
  {path: config.routes.register, component: Register, layout: null}, 

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
