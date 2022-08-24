import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';

function ReviewForClutchBag() {
   return (
      <div className="flex flex-col">
         <div className="">
            <span className="text-[25px] leading-[1.12em] text-black mb-[50px] font-semibold font-['Poppins']">
               1 review for Clutch Bag
            </span>
         </div>
         <div className="mt-[50px] flex justify-between">
            <div className="flex">
               <div className="">
                  <AccountCircleIcon sx={{ fontSize: 120, color: '#c5c5c5' }} />
               </div>
               <div className="mt-[10px] ml-[18px] flex flex-col">
                  <div className="">
                     <span className="text-[18px] font-semibold leading-[1.33em] font-[Poppins] text-black">admin</span>
                  </div>
                  <div>
                     <span className="text-[10px] uppercase tracking-[0.16em] font-normal">October 10</span>
                  </div>
                  <div className="mt-[12px] leading-[26px]">
                     <span className="text-[15px font-['Montserrat] font-normal text-black ">Beautiful</span>
                  </div>
               </div>
            </div>
            <div>
               <StarIcon className="css-i4bv87-MuiSvgIcon-root" />
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
            </div>
         </div>
         <div className="flex flex-col mt-[112px]">
            <div className="">
               <span className="text-[25px] leading-[1.12em] text-black font-['Poppins'] font-semibold	">
                  Add a review
               </span>
            </div>
            <div>
               <span className="font-['Montserrat'] text-[15px] font-normal leading-[26px] text-black">
                  Your email address will not be published. Required fields are marked
               </span>
            </div>
         </div>
         <div className="mt-[24px]">
            <span className="text-[10px] uppercase tracking-[0.16em] font-normal">Your Rating *</span>
         </div>
         <div className="text-[#a8a8a8]">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
         </div>
         <div className="mt-[20px]">
            <span className="text-[10px] uppercase tracking-[0.16em] font-normal">Your Review *</span>
         </div>
         <div className="mt-[12px]">
            <input className="w-full min-h-[200px] bg-[#f6f6f6] border-none outline-none " type="text" />
         </div>
         <div className="mt-[18px] flex ">
            <div className="flex flex-col basis-1/2">
               <div className="">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-normal">Name *</span>
               </div>
               <div>
                  <input
                     className=" w-[90%] border-t-0 boder-l-0 border-r-0 border-b-[1px] focus:border-black outline-none"
                     type="text"
                  />
               </div>
            </div>
            <div className="flex flex-col basis-1/2">
               <div className="">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-normal">Email *</span>
               </div>
               <div>
                  <input
                     className=" w-[90%] border-t-0 boder-l-0 border-r-0 border-b-[1px] focus:border-black outline-none"
                     type="text"
                  />
               </div>
            </div>
         </div>
         <button className="mt-[26px] w-[142px] h-[48px] bg-black ">
            <span className="text-white text-[13px] font-['Poppins'] leading-[2.1em] font-semibold outline-0">Submit</span>
         </button>
      </div>
   );
}

export default ReviewForClutchBag;
