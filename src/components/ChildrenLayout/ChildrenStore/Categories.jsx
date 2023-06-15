import NewLook from '~/images/NewLook/NewLook.jpg';

function Categories({ defaultData, setData }) {
   const handleClick = (value) => {
      const cloneData = [...defaultData];
      const newArr = cloneData.filter((item) => {
         return item.category === value;
      });
      setData(() => [...newArr]);
   };

   return (
      <>
         {/* Category */}
         <div className="mr-[32px] md:mr-0 ml-0 md:ml-[30px] mb-[12px] selection-default">
            <div className="">
               <span className="text-[18px] font-semibold font-['Poppins'] text-black">Categories</span>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px] cursor-pointer">
               <span onClick={() => handleClick('clothes')}>Clothes</span>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px] cursor-pointer">
               <span onClick={() => handleClick('bags')}>Bags</span>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px] cursor-pointer">
               <span onClick={() => handleClick('high heels')}>High Heels</span>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px] cursor-pointer">
               <span onClick={() => handleClick('wallet')}>Wallet</span>
            </div>
            <div className="mt-[36px]">
               <img className="w-[252px] h-[182px]" src={NewLook} alt="" />
            </div>
            <div className="mt-[62px]">
               <span className="text-[18px] font-semibold font-['Poppins']">Newsletter</span>
            </div>
            <div className="mt-[32px] relative">
               <div>
                  <input
                     className="min-w-[252px] outline-0 border-t-0 border-l-0 border-r-0 border-b-[1px] focus:border-b-black border-b-[#ccc] placeholder:text-[10px] placeholder:tracking-[0.16em] placeholder:font-normal placeholder-font-['Poppins'] placeholder:uppercase placeholder:text-black"
                     type="text"
                     placeholder="Your Email"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default Categories;
