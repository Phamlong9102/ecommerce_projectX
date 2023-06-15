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

import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeProduct from '../../components/ChildrenLayout/HomeProductChildren/HomeProduct';
import BagAndBackpacks from '../../components/ChildrenLayout/HomeProductChildren/BagAndBackpacks';

function HomeLogIn() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products');
         setData(result.data);
      };
      fetchData();
   }, []);

   return (
      <>
         {/* Carousel carousel */}
         <div className="hidden xl:flex justify-center select-none mt-9 mx-[52px] selection-default">
            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
               <div className="carousel-inner relative w-full overflow-hidden">
                  <div className="carousel-item active relative float-left w-full">
                     <img className="relative h-fit block w-fit" src={PinkBackGround} alt="Wild Landscape" />
                     <img className="absolute top-[19%] left-[calc(10%)] w-[12%]" src={ElementSlide1} />
                     <div>
                        <span className="absolute top-[26%] w-[14%] left-[15%] font-bold text-[150px] text-white font-[Poppins]">
                           Jumpsuits
                        </span>
                     </div>
                     <img className="absolute left-[47%] top-[-4%] w-[21%]" src={ElementSlide2} />
                  </div>
                  <div className="carousel-item relative float-left w-full">
                     <img className="max-h-[522px] block w-full" src={BlueBackGround} alt="Camera" />
                     <img className="absolute top-[-5%] left-[8%] w-[40%]" src={ElementSlide3} />
                     <img className="absolute left-[70%] top-[8%] w-[10%]" src={ElementSlide4} />
                     <div className="absolute top-[26%] left-[18%]">
                        <span className=" font-bold text-[160px] text-white font-[Poppins]">-50% Off</span>
                     </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                     <img className="max-h-[522px] block w-full" src={PinkBackGround} alt="Exotic Fruits" />
                     <img className="absolute top-[15%] left-[12%] w-[9%]" src={ElementSlide5} />
                     <div className="absolute top-[26%] left-[18%]">
                        <span className=" font-bold text-[160px] text-white font-[Poppins]">New look</span>
                     </div>
                     <img className="absolute left-[46%] top-[-11%] w-[40%]" src={ElementSlide6} />
                  </div>
               </div>

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
         <div className="hidden xl:flex mt-[86px] justify-center selection-default">
            <div className="relative max-w-[358px] mr-[90px]">
               <div className="absolute flex flex-col z-[100] top-[27%] left-[-33%]">
                  <div className="">
                     <span className="title-products-demo">Elegant and</span>
                  </div>
                  <div className="">
                     <span className="title-products-demo">Stylish Look</span>
                  </div>
               </div>

               <div className="absolute z-[100] top-[44%] left-[-31%] underline underline-offset-8 cursor-pointer">
                  <span className="see-whole-collection">See Whole Collection</span>
               </div>

               <Swiper
                  className="absolute mySwiper max-w-[358px] cursor-pointer"
                  navigation={true}
                  loop={true}
                  modules={[Navigation]}
               >
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo03} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$350.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo02} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$230.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo01} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$270.00</span>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className="max-w-[284px] ml-[90px] mt-[146px]">
               <img src={ProductsDemo04} />
            </div>
         </div>

         {/* Products Demo 2 */}
         <div className="hidden xl:flex justify-center selection-default">
            <div className="select-none mr-[90px] mt-[134px] pl-[144px]">
               <img className="h-[282px] " src={ProductsDemo05} />
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

               <div className="absolute z-[100] top-[44%] left-[-31%] underline underline-offset-8 cursor-pointer">
                  <span className="see-whole-collection">See Whole Collection</span>
               </div>

               <Swiper
                  className="absolute mySwiper max-w-[358px] cursor-pointer"
                  navigation={true}
                  loop={true}
                  modules={[Navigation]}
               >
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo06} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$250.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo07} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$550.00</span>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="relative" src={ProductsDemo08} />
                     <div className="absolute top-[3%] left-[5%]">
                        <span className="price-products-demo">$130.00</span>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>

         {/* Summer collection Shopping everyday */}
         <div className="mt-[130px] flex flex-col text-center selection-default">
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
         <div className="mt-[60px] select-none flex justify-center selection-default mx-0 md:mx-[120px]">
            <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px] sm:gap-x-[30px] ">
                  {data.slice(0, 8).map((product) => (
                     <HomeProduct key={product.id} product={product} />
                  ))}
               </div>
            </div>
         </div>

         {/* Sleeveless top */}
         <div className="hidden lg:flex mt-[122px] select-none justify-center selection-default">
            <div className="relative bg-test min-w-[1347px] min-h-[700px]">
               <div className="absolute right-0">
                  <img className="max-w-[650px] min-h-[690px]" src={banner01} />
               </div>
               <div className="absolute left-0 top-[8%]">
                  <img className="w-[1246px] h-[586px]" src={banner02} />
               </div>
               <div className="absolute left-[2%] top-[8%]">
                  <img className="w-[82%]" src={banner03} />
               </div>
               <div className="absolute right-[32%] top-[24%]">
                  <img className="w-[82%]" src={banner04} />
               </div>
               <div className="absolute left-[40%] top-[8%]">
                  <img className="w-[87%]" src={banner05} />
               </div>
               <div className="absolute top-[32%] right-[10%]">
                  <Link className="flex flex-col banner-text" to="/">
                     <span>Sleeveless</span>
                     <span>top</span>
                  </Link>
               </div>
            </div>
         </div>

         <div className="flex text-center flex-col mt-[130px] selection-default">
            <div className="">
               <span className="bag-and-bagpacks-summer-collection">Summer Collection</span>
            </div>
            <div className="mt-[16px]">
               <span className="describe-title">Bags and Backpacks</span>
            </div>
         </div>

         {/* Bag and Backpack Product */}
         <div className="flex justify-center mt-[50px] select-none selection-default">
            <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px] sm:gap-x-[30px]">
                  {data.slice(8, 12).map((product) => (
                     <BagAndBackpacks key={product.id} product={product} />
                  ))}
               </div>
            </div>
         </div>

         {/* What they're saying*/}
         <div className="hidden sm:flex justify-center text-center w-full h-[634px] mt-[80px] relative selection-default">
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
                     <SwiperSlide>
                        <img src={brand01} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand02} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand03} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand04} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand05} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand06} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={brand07} />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>

         {/* Time to shine */}
         <div className="hidden xl:flex justify-center mt-[200px] selection-default">
            <div className="bg-test relative w-[1347px] h-[600px]">
               <div className="absolute top-0 left-[4%] bg-[#ecf4fa] w-[684px] h-[500px]">
                  <div className="absolute top-[-14%] left-[9%]">
                     <img className="w-[83%]" src={TimeToShine01} />
                  </div>
               </div>

               <div className="absolute top-[8%] left-[52%] flex flex-col  ">
                  <span className="collection-title ">Summer Collecton</span>
                  <span className="describe-title mt-[18px]">Time to Shine</span>

                  <div className="flex flex-col mt-[40px] describe-content">
                     <span>Ne sed vero libris, his vivendo referrentur an.</span>
                     <span>Torquatos voluptatum sit ad. Legendos dignissim eu</span>
                     <span>Torquatos voluptatum sit ad. Legendos dignissim eu</span>
                     <span>deserunt sed in, ex quo quot invidunt.</span>
                     <span className="mt-[68px] cursor-pointer see-whole-collection underline underline-offset-8">
                        See Whole Collection
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* FashionBlog title*/}
         <div className="mt-[60px] selection-default">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px] sm:gap-x-[30px]">
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={FashionBlog01} />
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
                  <img className="w-full max-h-[342px]" src={FashionBlog02} />
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
                  <img className="w-full max-h-[342px]" src={FashionBlog03} />
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
                  <img className="w-full max-h-[342px]" src={FashionBlog04} />
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
      </>
   );
}

export default HomeLogIn;
