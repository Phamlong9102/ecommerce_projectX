import 'tw-elements';
import PinkBackGround from '~/images/HeaderImages/PinkBackGround.jpg';
import BlueBackGround from '~/images/HeaderImages/BlueBackGround.jpg';
import ElementSlide1 from '~/images/HeaderImages/ElementSlide1.png';
import ElementSlide2 from '~/images/HeaderImages/ElementSlide2.png';
import ElementSlide3 from '~/images/HeaderImages/ElementSlide3.png';
import ElementSlide4 from '~/images/HeaderImages/ElementSlide4.png';
import ElementSlide5 from '~/images/HeaderImages/ElementSlide5.png';
import ElementSlide6 from '~/images/HeaderImages/ElementSlide6.png';

function Home() {
   return (
      // Carousel
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

      // Web banner
      
      
   );
}

export default Home;
