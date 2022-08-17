// Config route liên quan đến config tức là cấu hình. Còn routes ở thư mục gốc sẽ chứa 
// những tuyến đường 
const routes = {
    home: '/',
    admin: '/admin',
    cart: '/cart',
    checkout: '/checkout',
    search: '/search',
    store: '/store',
    clutch: '/store/clutch-bag',
    productsdetail: '/@:to'
};

export default routes;