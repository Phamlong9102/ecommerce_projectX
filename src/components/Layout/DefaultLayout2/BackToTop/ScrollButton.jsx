import { useState, useEffect } from 'react';

const ScrollButton = () => {
   // eslint-disable-next-line no-unused-vars
   const [isVisible, setIsVisible] = useState(false);
  
   const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    useEffect(() => {
      // Button is displayed after scrolling for 500 pixels
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

   return (
      <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3 className='select-none cursor-pointer bottom-0 fixed font-semibold right-0 text-black	rotate-[270deg] mb-14 border-b border-slate-300'>Back to top</h3>
        </div>
      )}
    </div>
   );
};

export default ScrollButton;
