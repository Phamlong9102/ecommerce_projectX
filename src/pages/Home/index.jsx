// import Carousel
import 'tw-elements';
import 'flowbite';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// first Carousel
import PinkBackGround from '~/images/HeaderImages/PinkBackGround.jpg';
import BlueBackGround from '~/images/HeaderImages/BlueBackGround.jpg';
import ElementSlide1 from '~/images/HeaderImages/ElementSlide1.png';
import ElementSlide2 from '~/images/HeaderImages/ElementSlide2.png';
import ElementSlide3 from '~/images/HeaderImages/ElementSlide3.png';
import ElementSlide4 from '~/images/HeaderImages/ElementSlide4.png';
import ElementSlide5 from '~/images/HeaderImages/ElementSlide5.png';
import ElementSlide6 from '~/images/HeaderImages/ElementSlide6.png';

// Web banner
import banner01 from '~/images/BannerImages/banner01.png';
import banner02 from '~/images/BannerImages/banner02.png';
import banner03 from '~/images/BannerImages/banner03.png';
import banner04 from '~/images/BannerImages/banner04.jpg';
import banner05 from '~/images/BannerImages/banner05.png';

import { Link } from 'react-router-dom';

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

         <div className="flex text-center	 justify-center relative mt-[136px]">
            <div className="absolute flex flex-col z-1">
               <span className="collection-title">Summer Collection</span>
               <span className="mt-[18px] describe-title">What they're saying</span>
            </div>

            <div className="flex justify-center relative w-[1252px] h-[500px] bg-[#f7f8fa] mt-[136px] mx-[50px]">
               <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="">
                           <span className="">
                              Ne sed vero libris, his vivendo referrentur an. Torquatos voluptatum sit
                           </span>
                           <span className="">
                              ad. Legendos dignissim eu mea, sea ei doming inimicus asdolescens.
                           </span>
                           <span className="">
                              Stet iusto deserunt sed in, ex quo quot invidunt.{' '}
                           </span>
                        </div>
                        <div className="">
                           <span className="">Johana Hughes</span>
                           <span className="">DESIGNER</span>
                        </div>
                     </div>
                     <div className="">
                        <div className="">
                           <span className="">
                              Duo alii persius qualisque in, sea ne affect iudicabit vituperatorribus.
                           </span>
                           <span className="">
                              Exerci fabellas mei ea, est ad audire eripuit tincidunt. Omnes meliore
                           </span>
                           <span className="">
                              qui id, sit no scaevola maluisset persequeris.
                           </span>
                        </div>
                        <div className="">
                           <span className="">Mario Jonson</span>
                           <span className="">DESIGNER</span>
                        </div>
                     </div>
                     <div className="">
                        <div className="">
                           <span className="">
                              At quidam dissentiet definition eam, te nec ullum similique.
                           </span>
                           <span className="">
                              Verear appareat advarsarium id eos, eum ei aperivi vivendo quaestio,
                           </span>
                           <span className="">mea leg ea. Quo probo noluisse menandri an.</span>
                        </div>
                        <div className="">
                           <span className="">Jenifer Jacobs</span>
                           <span className="">DESIGNER</span>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-button-next btn_btn"></div>
                  <div className="swiper-button-prev btn_btn"></div>
                  <div className="swiper-pagination"></div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
