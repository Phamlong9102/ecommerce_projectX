import whiteLogoWeb from '~/images/FooterImages/whiteLogoWeb.png';
import visaCard from '~/images/FooterImages/visaCard.png';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
   return (
      <div className="w-full min-h-[522px] mt-[400px] bg-black text-white select-none">
         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mx-[50px] gap-y-[40px]  pt-[132px] pb-[10px]">
            <div className="">
               <div>
                  <a href="/">
                     <img className="h-[23px]" src={whiteLogoWeb} alt="Logo Web" />
                  </a>
               </div>
               <div className="flex flex-wrap flex-col mt-8	font-size-content-footer font-family-content-footer">
                  <span className="">Lorem ipsum dolor sit</span>
                  <span className="">amet, doming quaeque</span>
                  <span className="">an mea gravida.</span>
                  <img className="w-[93px] h-[43px] mt-[18px]" src={visaCard} alt="VisaCard" />
               </div>
               <div className=""></div>
            </div>
            <div>
               <div>
                  <span className="font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Locate us
                  </span>
               </div>
               <div className="font-size-content-footer font-family-content-footer cursor-pointer	">
                  <div className="flex flex-wrap flex-col mt-8	">
                     <div className="flex flex-col hover-styles-content-footer">
                        <span>487 Eighth Avenue</span>
                        <span>West Street, New York</span>
                     </div>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span> Phone: 0035265244</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Email: </span>
                     <span>onea@example.com</span>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <span className="font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Infomation
                  </span>
               </div>
               <div className="mt-8 font-size-content-footer font-family-content-footer cursor-pointer	">
                  <div className="flex flex-col hover-styles-content-footer">
                     <span>About us</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span> FAQ Page</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Contact us</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Work with us</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Offices</span>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <span className="font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Discover
                  </span>
               </div>
               <div className="mt-8 font-size-content-footer font-family-content-footer cursor-pointer">
                  <div className="flex flex-col hover-styles-content-footer">
                     <span>Men</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Woman</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Home and Living</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Sale</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Private Shopping</span>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <span className="font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Conect
                  </span>
               </div>
               <div className="mt-8 font-size-content-footer font-family-content-footer cursor-pointer">
                  <div className="flex flex-col hover-styles-content-footer">
                     <span>Follow us on Instagram</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Add to Facebook</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Pinterest</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Follow us on Twitter</span>
                  </div>
                  <div className="mt-[18px] hover-styles-content-footer">
                     <span>Google</span>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <span className="font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Dowload App
                  </span>
               </div>
               <div className="mt-8 font-size-content-footer font-family-content-footer cursor-pointer	">
                  <div className="flex flex-wrap flex-col mt-8	">
                     <div className="flex flex-col hover-styles-content-footer">
                        <span>Onea App for iOS</span>
                        <span>and Android</span>
                     </div>
                  </div>
               </div>
               <div className="mt-[22px]">
                  <span className=" font-size-title-footer font-family-title-footer font-weight-title-footer">
                     Newsletter
                  </span>
               </div>
               <div className="mt-[30px] relative">
                  <input
                     className="bg-black border-x-0 border-t-0 pb-2 placeholder:text-white placeholder:font-normal placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest	focus:outline-none border-b-[1px] border-white"
                     type="text"
                     placeholder="Your email"
                  />
                  {/* <MailOutlineIcon sx={{ fontSize: 18 }} className="absolute top-[20%] left-[85%] "/> */}
               </div>
            </div>
         </div>
         <div className="mt-9 relative flex py-5 justify-center">
            <div className="absolute border-t border-gray-600 w-10/12"></div>
         </div>
         <div className='flex h-fit justify-center mt-2.5 pb-[40px] font-size-content-footer font-family-content-footer'>
            <div className="">
               <span className="">@ 2018 
                  <a className='hover-styles-content-footer ml-[3px]' href={'https://qodeinteractive.com'} target="_blank" rel="noopener noreferrer">Quode Interactive,</a>
                  &nbsp; All Rights Reserved
               </span>
            </div>
         </div>
      </div>
   );
}
export default Footer;
