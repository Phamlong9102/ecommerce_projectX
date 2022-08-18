// import Carousel
import 'tw-elements';
import { Link } from 'react-router-dom';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper';
import 'swiper/css/bundle';

// Under Menu
import PinkBackGround from '~/images/HeaderImages/PinkBackGround.jpg';
import BlueBackGround from '~/images/HeaderImages/BlueBackGround.jpg';
import ElementSlide1 from '~/images/HeaderImages/ElementSlide1.png';
import ElementSlide2 from '~/images/HeaderImages/ElementSlide2.png';
import ElementSlide3 from '~/images/HeaderImages/ElementSlide3.png';
import ElementSlide4 from '~/images/HeaderImages/ElementSlide4.png';
import ElementSlide5 from '~/images/HeaderImages/ElementSlide5.png';
import ElementSlide6 from '~/images/HeaderImages/ElementSlide6.png';

// Products Demo
import ProductsDemo01 from '~/images/ProductsDemo/ProductsDemo01.jpg';
import ProductsDemo02 from '~/images/ProductsDemo/ProductsDemo02.jpg';
import ProductsDemo03 from '~/images/ProductsDemo/ProductsDemo03.jpg';
import ProductsDemo04 from '~/images/ProductsDemo/ProductsDemo04.jpg';
import ProductsDemo05 from '~/images/ProductsDemo/ProductsDemo05.jpg';
import ProductsDemo06 from '~/images/ProductsDemo/ProductsDemo06.jpg';
import ProductsDemo07 from '~/images/ProductsDemo/ProductsDemo07.jpg';
import ProductsDemo08 from '~/images/ProductsDemo/ProductsDemo08.jpg';

// Shopping everyday
import SE01 from '~/images/ShoppingEveryDay/SE01.jpg'
import SE02 from '~/images/ShoppingEveryDay/SE02.jpg'
import SE03 from '~/images/ShoppingEveryDay/SE03.jpg'
import SE04 from '~/images/ShoppingEveryDay/SE04.jpg'
import SE05 from '~/images/ShoppingEveryDay/SE05.jpg'
import SE06 from '~/images/ShoppingEveryDay/SE06.jpg'
import SE07 from '~/images/ShoppingEveryDay/SE07.jpg'
import SE08 from '~/images/ShoppingEveryDay/SE08.jpg'

// Bag and Backpacks 
import Bag01 from '~/images/BagAndBackpacks/Bag01.jpg'
import Bag02 from '~/images/BagAndBackpacks/Bag02.jpg'
import Bag03 from '~/images/BagAndBackpacks/Bag03.jpg'
import Bag04 from '~/images/BagAndBackpacks/Bag04.jpg'

// Web banner
import banner01 from '~/images/BannerImages/banner01.png';
import banner02 from '~/images/BannerImages/banner02.png';
import banner03 from '~/images/BannerImages/banner03.png';
import banner04 from '~/images/BannerImages/banner04.jpg';
import banner05 from '~/images/BannerImages/banner05.png';

// Carousel Brand
import brand01 from '~/images/CarouselBrand/brand01.png';
import brand02 from '~/images/CarouselBrand/brand02.png';
import brand03 from '~/images/CarouselBrand/brand03.png';
import brand04 from '~/images/CarouselBrand/brand04.png';
import brand05 from '~/images/CarouselBrand/brand05.png';
import brand06 from '~/images/CarouselBrand/brand06.png';
import brand07 from '~/images/CarouselBrand/brand07.png';

// TimeToShine
import TimeToShine01 from '~/images/TimeToShine/TimeToShine01.png';

// Fashion Blog
import FashionBlog01 from '~/images/FashionBlog/FashionBlog01.jpg';
import FashionBlog02 from '~/images/FashionBlog/FashionBlog02.jpg';
import FashionBlog03 from '~/images/FashionBlog/FashionBlog03.jpg';
import FashionBlog04 from '~/images/FashionBlog/FashionBlog04.jpg';

function Home() {
   return (
      <>
         {/* Carousel carousel */}
         <div className="select-none mt-9 mx-[52px]">
            <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
               <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active relative float-left w-full">
                     <img class="relative max-h-[522px] block w-full" src={PinkBackGround} alt="Wild Landscape" />
                     <img className="absolute top-[19%] left-[calc(10%)] w-[12%]" src={ElementSlide1} alt="" />
                     <div>
                        <span className="absolute top-[26%] w-[14%] left-[15%] font-bold text-[150px] text-white font-[Poppins]">
                           Jumpsuits
                        </span>
                     </div>
                     <img className="absolute left-[47%] top-[-4%] w-[21%]" src={ElementSlide2} alt="" />
                  </div>
                  <div class="carousel-item relative float-left w-full">
                     <img class="max-h-[522px] block w-full" src={BlueBackGround} alt="Camera" />
                     <img className="absolute top-[-5%] left-[8%] w-[40%]" src={ElementSlide3} alt="" />
                     <img className="absolute left-[70%] top-[8%] w-[10%]" src={ElementSlide4} alt="" />
                     <div className="absolute top-[26%] left-[18%]">
                        <span className=" font-bold text-[160px] text-white font-[Poppins]">-50% Off</span>
                     </div>
                  </div>
                  <div class="carousel-item relative float-left w-full">
                     <img class="max-h-[522px] block w-full" src={PinkBackGround} alt="Exotic Fruits" />
                     <img className="absolute top-[15%] left-[12%] w-[9%]" src={ElementSlide5} alt="" />
                     <div className="absolute top-[26%] left-[18%]">
                        <span className=" font-bold text-[160px] text-white font-[Poppins]">New look</span>
                     </div>
                     <img className="absolute left-[46%] top-[-11%] w-[40%]" src={ElementSlide6} alt="" />
                  </div>
               </div>

               <button
                  class="w-[62px] h-[62px] bg-black opacity-100 hover:opacity-100 carousel-control-prev absolute top-[44%] right-[calc(5%-1px)] flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
               >
                  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
               </button>
               <button
                  class="w-[62px] h-[62px] bg-black opacity-100 hover:opacity-100 carousel-control-next absolute top-[44%] right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
               >
                  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
               </button>

               <div className="absolute bottom-[5%] flex text-[15px] font-[Poppins] ">
                  <div className="ml-8">
                     <a className="" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                     </a>
                  </div>
                  <div className="ml-8">
                     <a className="" href="https://Instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                     </a>
                  </div>
                  <div className="ml-8">
                     <a className="" href="https://Twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* ProductsDemo */}
         <div className="flex mt-[86px] justify-center select-none cursor-pointer">
            <div className="relative max-w-[358px] mr-[90px]">
               <div className="absolute flex flex-col z-[100] top-[27%] left-[-33%]">
                  <div className="">
                     <span className="title-products-demo">Elegant and</span>
                  </div>
                  <div className="">
                     <span className="title-products-demo">Stylish Look</span>
                  </div>
               </div>

               <div className="absolute z-[100] top-[44%] left-[-31%] underline underline-offset-8">
                  <span className="see-whole-collection">See Whole Collection</span>
               </div>

               <Swiper
                  className="absolute mySwiper max-w-[358px] "
                  navigation={true}
                  loop={true}
                  modules={[Navigation]}
               >
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo03} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$350.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo02} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$230.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo01} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$270.00</span>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className="max-w-[284px] ml-[90px] mt-[146px]">
               <img src={ProductsDemo04} alt="" />
            </div>
         </div>

         {/* Products Demo 2 */}
         <div className="flex justify-center">
            <div className="select-none mr-[90px] mt-[134px] pl-[144px]">
               <img className="h-[282px] " src={ProductsDemo05} alt="" />
            </div>

            <div className="relative max-w-[358px] ml-[90px]">
               <div className="absolute flex flex-col z-[100] top-[27%] left-[-33%]">
                  <div className="">
                     <span className="title-products-demo">Elegant and</span>
                  </div>
                  <div className="">
                     <span className="title-products-demo">Stylish Look</span>
                  </div>
               </div>

               <div className="absolute z-[100] top-[44%] left-[-31%] underline underline-offset-8">
                  <span className="see-whole-collection">See Whole Collection</span>
               </div>

               <Swiper
                  className="absolute mySwiper max-w-[358px] "
                  navigation={true}
                  loop={true}
                  modules={[Navigation]}
               >
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo06} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$250.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo07} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$550.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo08} alt="" />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$130.00</span>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>

         {/* Summer collection Shopping everyday */}
         <div className="mt-[130px] flex flex-col text-center">
            <div className=" ">
               <span className="bag-and-bagpacks-summer-collection">Summer Collection</span>
            </div>
            <div className="mt-[16px]">
               <span className="describe-title">Shopping Everyday</span>
            </div>
            <div className="mt-[20px]">
               <span className="describe-content">Autem neglegentur in duo, ex aperiam fabulas mei, exerci</span>
            </div>
            <div className="">
               <span className="describe-content">menandri explicari ut mei. Eam cibo et.</span>
            </div>
         </div>
         {/* Shopping everyday products  */}
         <div className="mt-[60px] select-none flex justify-center selection-default">
            <div className="grid grid-cols-4 gap-4">
               <Link to="store/clutch-bag" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE01} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">New</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Clutch Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$175.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               
               <Link to="/store/orange-airsuit" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE02} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Airsuit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$225.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
                  
               </Link>
               <Link to="/store/orange-sandal" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE03} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-black text-white leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">Sale</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Sandal</span>
                     </div>
                     <div>
                        <span className="price-line-through-shopping-everyday-products">$125.00</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$75.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/blue-suit" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE04} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Blue Suit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$360.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/orange-weil" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE05} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Weil</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$60.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/white-purse" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE06} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">White Purse</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$75.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/red-suit" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE07} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">New</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Red Suit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$456.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/golden-sandals" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE08} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Golden Sandals</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$115.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
                  
               </Link>
            </div>
         </div>

         {/* Sleeveless top */}
         <div className="mt-[122px] select-none flex justify-center">
            <div className="relative bg-test w-[1347px] h-[700px]">
               <div className="absolute right-0">
                  <img className="max-w-[650px] min-h-[690px]" src={banner01} alt="" />
               </div>
               <div className="absolute left-0 top-[8%]">
                  <img className="w-[1246px] h-[586px]" src={banner02} alt="" />
               </div>
               <div className="absolute left-[2%] top-[8%]">
                  <img className="w-[82%]" src={banner03} alt="" />
               </div>
               <div className="absolute right-[32%] top-[24%]">
                  <img className="w-[82%]" src={banner04} alt="" />
               </div>
               <div className="absolute left-[40%] top-[8%]">
                  <img className="w-[87%]" src={banner05} alt="" />
               </div>
               <div className="absolute top-[32%] right-[10%]">
                  <Link className="flex flex-col banner-text" to="/">
                     <span>Sleeveless</span>
                     <span>top</span>
                  </Link>
               </div>
            </div>
         </div>

         <div className='flex text-center flex-col mt-[130px]'>
            <div className="">
               <span className='bag-and-bagpacks-summer-collection'>Summer Collection</span>
            </div>
            <div className="mt-[16px]">
               <span className='describe-title'>Bags and Backpacks</span>
            </div>
         </div>

         <div className='flex justify-center mt-[50px] select-none '>
            <div className='grid grid-cols-4 gap-4'>
               <Link to="/store/mission-bag" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={Bag01} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Mission Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$110.00</span>
                     </div>
                  </div>
               </Link>
               <Link to="/store/city-mini-bag" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={Bag02} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">City Mini Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$85.00</span>
                     </div>
                  </div> 
               </Link>
               <Link to="/store/shoulder-bag" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={Bag03} alt="" />           
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Shoudler Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$90.00</span>
                     </div>
                  </div>
               </Link>
               <Link to="/store/drawstring-bag" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={Bag04} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Drawstring Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$45.00</span>
                     </div>
                  </div>
               </Link>
            </div>
         </div>

         {/* What they're saying*/}
         <div className="flex justify-center text-center w-full h-[634px] mt-[80px] relative selection-default">
            <div className="absolute flex text-center justify-center flex-col mt-[76px] z-[100]">
               <span className="collection-title">Summer Collection</span>
               <span className="mt-[18px] describe-title">What they're saying</span>
            </div>

            <div className="flex justify-center absolute w-[1252px] h-[500px] bg-[#f7f8fa] mt-[136px] mx-[50px]x">
               <Swiper
                  className="mySwiper cursor-pointer absolute top-12% w-[560px] h-[300px] mt-[60px] swiper-pagination-bullets"
                  modules={[Pagination, Navigation, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={true}
                  loop={true}
               >
                  <SwiperSlide className="mt-[50px]">
                     <div className="describe-content">
                        <span className="">
                           Ne sed vero libris, his vivendo referrentur an. Torquatos voluptatum sit
                        </span>
                        <span className="">ad. Legendos dignissim eu mea, sea ei doming inimicus asdolescens.</span>
                        <span className="">Stet iusto deserunt sed in, ex quo quot invidunt.</span>
                     </div>
                     <div className="mt-10 flex flex-col">
                        <span className="name-of-designer">Johana Hughes</span>
                        <span className="name-of-job">DESIGNER</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="mt-[50px]">
                     <div className="describe-content">
                        <span className="">
                           Duo alii persius qualisque in, sea ne affect iudicabit vituperatorribus.
                        </span>
                        <span className="">Exerci fabellas mei ea, est ad audire eripuit tincidunt. Omnes meliore</span>
                        <span className="">qui id, sit no scaevola maluisset persequeris.</span>
                     </div>
                     <div className="mt-10 flex flex-col">
                        <span className="name-of-designer">Mario Jonson</span>
                        <span className="name-of-job">DESIGNER</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="mt-[50px]">
                     <div className="describe-content">
                        <span className="">At quidam dissentiet definition eam, te nec ullum similique.</span>
                        <span className="">Verear appareat advarsarium id eos, eum ei aperivi vivendo quaestio,</span>
                        <span className="">mea leg ea. Quo probo noluisse menandri an.</span>
                     </div>
                     <div className="mt-10 flex flex-col">
                        <span className="name-of-designer">Jenifer Jacobs</span>
                        <span className="name-of-job">DESIGNER</span>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <div className="absolute top-[64%] cursor-pointer w-[1252px] h-[48px]">
                  <Swiper
                     className="mySwiper w-[100%] top-[80%]"
                     slidesPerView={5}
                     spaceBetween={30}
                     loop={true}
                     autoplay={{
                        delay: 2500,
                     }}
                     freeMode={true}
                     modules={[FreeMode, Autoplay]}
                  >
                     <SwiperSlide className="">
                        <img className="" src={brand01} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand02} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand03} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand04} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand05} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand06} alt="" />
                     </SwiperSlide>
                     <SwiperSlide className="">
                        <img className="" src={brand07} alt="" />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>

         {/* Time to shine */}
         <div className="flex justify-center mt-[200px] ">
            <div className="bg-test relative w-[1347px] h-[600px]">
               <div className="absolute top-0 left-[4%] bg-[#ecf4fa] w-[684px] h-[500px]">
                  <div className="absolute top-[-14%] left-[9%]">
                     <img className="w-[83%]" src={TimeToShine01} alt="" />
                  </div>
               </div>

               <div className="absolute top-[8%] left-[52%] flex flex-col selection-default">
                  <span className="collection-title ">Summer Collecton</span>
                  <span className="describe-title mt-[18px]">Time to Shine</span>

                  <div className="flex flex-col mt-[40px] describe-content">
                     <span>Ne sed vero libris, his vivendo referrentur an.</span>
                     <span>Torquatos voluptatum sit ad. Legendos dignissim eu</span>
                     <span>Torquatos voluptatum sit ad. Legendos dignissim eu</span>
                     <span>deserunt sed in, ex quo quot invidunt.</span>
                     <span className="mt-[68px] see-whole-collection underline underline-offset-8">
                        See Whole Collection
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* FashionBlog title*/}
         <div className="selection-default">
            <div className="flex flex-col text-center justify-center">
               <span className="collection-title">Love Shopping</span>
               <span className="describe-title mt-[18px]">Fashion Blog</span>
            </div>
            <div className="describe-content flex flex-col text-center justify-center mt-[18px]">
               <span>Autem neglegentur in duo, ex aperiam fabulas mei, exerci</span>
               <span>menandri explicari ut mei. Eam cibo.</span>
            </div>
         </div>

         {/* Fashion Blog */}
         <div className="mt-[60px] select-none flex justify-center selection-default">
            <div className="grid grid-cols-4 gap-4">
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={FashionBlog01} alt="" />
                  <div className="absolute top-[calc(8%-2px)] left-[-15%] w-[114px] h-[40px] bg-white text-black leading-[40px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">September 9</span>
                  </div>
                  <div className="flex flex-col name-of-job mt-[28px]">
                     <span>Admin / Accessories / Casual</span>
                  </div>
                  <div className="flex flex-col title-content-blog-styles mt-[6px]">
                     <span>Believe that life is worth</span>
                     <span>living and your belief will </span>
                     <span>help create the fact.</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={FashionBlog02} alt="" />
                  <div className="absolute top-[calc(8%-2px)] left-[-15%] w-[114px] h-[40px] bg-white text-black leading-[40px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">September 9</span>
                  </div>
                  <div className="flex flex-col name-of-job mt-[28px]">
                     <span>Admin / Accessories / Style</span>
                  </div>
                  <div className="flex flex-col title-content-blog-styles mt-[6px]">
                     <span>Age and size are only </span>
                     <span>numbers. It's the attitude</span>
                     <span>you bring to clothes.</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={FashionBlog03} alt="" />
                  <div className="absolute top-[calc(8%-2px)] left-[-15%] w-[114px] h-[40px] bg-white text-black leading-[40px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">September 9</span>
                  </div>
                  <div className="flex flex-col name-of-job mt-[28px]">
                     <span>Admin / Accessories / Minimal</span>
                  </div>
                  <div className="flex flex-col title-content-blog-styles mt-[6px]">
                     <span>Any half-awake materialist</span>
                     <span>well knows - which you</span>
                     <span>hold holds you.</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={FashionBlog04} alt="" />
                  <div className="absolute top-[calc(8%-2px)] left-[-15%] w-[114px] h-[40px] bg-white text-black leading-[40px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">September 9</span>
                  </div>
                  <div className="flex flex-col name-of-job mt-[28px]">
                     <span>Admin / Accessories / Creative</span>
                  </div>
                  <div className="flex flex-col title-content-blog-styles mt-[6px]">
                     <span>Comfort and simplicity are</span>
                     <span>two keys that I follow when it</span>
                     <span>comes to fashion.</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Join our Newletter */}
         <div className="flex relative justify-center mt-[100px] mx-[48px] selection-default">
            <div className="absolute bg-[#f7f8fa] w-[1248px] min-h-[320px] mx-[48px]">
               <div className="absolute top-[-7%] left-[36%]">
                  <span className="describe-title">Join our Newsletter</span>
               </div>
               <div className="absolute  mt-[70px] left-[26%] text-center underline underline-offset-[14px]">
                  <input className="your-email" type="text" placeholder="Your email" />
               </div>
               <div className="absolute cursor-pointer w-[128px] h-[46px] bg-black top-[45%] left-[45%] text-center leading-[46px]">
                  <button className="button-newsletter">Send</button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
