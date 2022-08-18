import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Search01 from '~/images/Search/Search01.jpg';
import Search02 from '~/images/Search/Search02.jpg';
import Search03 from '~/images/Search/Search03.jpg';
import Search04 from '~/images/Search/Search04.jpg';

function Search() {
   return (
      <>
         {/* Điều hướng */}
         <div className="w-full h-[140px] relative flex justify-center bg-[#f6f6f6] mt-[32px] selection-default">
            <div className="absolute top-[40%] left-[9%] store-menu-route">
               <Link className="" to="/">
                  <span className="">Home</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Search result for ""</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[9%] mt-[10px]">
               <span className="store-big-title">Search result for: </span>
            </div>
         </div>

         <div className="mt-[78px] mx-[122px] selection-default">
            <div className="mb-[20px]">
               <span className="font-semibold font-['Poppins'] text-[38px] leading-[1.1em] text-black">
                  New search:
               </span>
            </div>
         </div>

         <div className="mx-[122px] selection-default">
            <input
               className="relative w-full h-[40px] cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-black outline-0 placeholder:text-[15px] placeholder:font-['Montserrat'] font-normal placeholder:text-black uppercase placeholder:tracking-[0.16em]"
               placeholder="Type here"
               type="text"
            />
            <button className="absolute right-[9%]">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>

         <div className="mx-[122px] mt-[8px] selection-default">
            <span className="text-[13px] font-normal text-black font-[Montserrat]">
               If you are not happy with the results below please do another search
            </span>
         </div>

         <div className="mx-[122px] mt-[66px] selection-default">
            <div className="flex pb-[30px] border-b-[1px] border-[#ccc]">
               <Link to="/store/clutch-bag" className="">
                  <img className="w-[130px] h-[130px]" src={Search04} alt="" />
               </Link>
               <div className="ml-[22px] flex flex-col">
                  <Link className="font-['Poppins'] font-semibold text-[15px] text-black" to="/store/clutch-bag">
                     Clutch Bag
                  </Link>
                  <div className="mt-[7px] font-['Montserrat'] text-[15px] font-normal text-black">
                     <span>Lorem ipsum dolor</span>
                  </div>
               </div>
            </div>
            <div className="flex pb-[30px] pt-[30px] border-b-[1px] border-[#ccc]">
               <Link to="/store/city-mini-bag" className="">
                  <img className="w-[130px] h-[130px]" src={Search02} alt="" />
               </Link>
               <div className="ml-[22px] flex flex-col">
                  <Link className="font-['Poppins'] font-semibold text-[15px] text-black" to="/store/city-mini-bag">
                     City Mini Bag
                  </Link>
                  <div className="mt-[7px] font-['Montserrat'] text-[15px] font-normal text-black">
                     <span>Lorem ipsum dolor</span>
                  </div>
               </div>
            </div>
            <div className="flex pb-[30px] pt-[30px] border-b-[1px] border-[#ccc]">
               <Link to="/store/shoulder-bag" className="">
                  <img className="w-[130px] h-[130px]" src={Search03} alt="" />
               </Link>
               <div className="ml-[22px] flex flex-col">
                  <Link className="font-['Poppins'] font-semibold text-[15px] text-black" to="/store/shoulder-bag">
                     Shoulder Bag
                  </Link>
                  <div className="mt-[7px] font-['Montserrat'] text-[15px] font-normal text-black">
                     <span>Lorem ipsum dolor</span>
                  </div>
               </div>
            </div>
            <div className="flex pb-[30px] pt-[30px] border-b-[1px] border-[#ccc]">
               <Link to="/store/mission-bag" className="">
                  <img className="w-[130px] h-[130px]" src={Search01} alt="" />
               </Link>
               <div className="ml-[22px] flex flex-col">
                  <Link className="font-['Poppins'] font-semibold text-[15px] text-black" to="/store/mission-bag">
                     Mission Bag
                  </Link>
                  <div className="mt-[7px] font-['Montserrat'] text-[15px] font-normal text-black">
                     <span>Mission Bag</span>
                  </div>
               </div>
            </div>
            <div className="flex pb-[30px] pt-[30px] border-b-[1px] border-[#ccc]">
                <Link to="/" className="font-['Poppins'] font-semibold text-[15px] text-black ">Home</Link>
            </div>
            <div className="flex pb-[30px] pt-[30px] border-b-[1px] border-[#ccc]">
                <Link to="/store" className="font-['Poppins'] font-semibold text-[15px] text-black">Store</Link>
            </div>
            <div className="flex mt-[50px] ">
                <Link to="" className="font-['Poppins'] font-medium text-[14px] text-black">1</Link>
                <Link to="" className="ml-[23px] font-['Poppins'] font-medium text-[14px] text-black">2</Link>
                <button className='ml-[26px] text-center leading-[23px]'>
                    <FontAwesomeIcon className="font-normal" icon={faAngleRight} />
                </button>
            </div>
         </div>
         
      </>
   );
}

export default Search;
