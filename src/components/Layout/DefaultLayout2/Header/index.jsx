function Header() {
   return (
      <header className="w-full hidden lg:flex xl:flex 2xl:flex bg-black h-12 items-center justify-between leading-[0rem] select-none	">
         <div className="">
            <span className="text-white text-xs	ml-12">Free shipping on domestic orders over $150</span>
         </div>
         <div className="flex uppercase text-white text-[11px] mr-12 tracking-wide cursor-pointer">
            <div className="mr-6 tracking-[0.2em]  text-white hover:text-zinc-400 ease-in duration-200">Sign in</div>
            <div className="mr-6 tracking-[0.2em] text-white hover:text-zinc-400 ease-in duration-200">Contact us</div>
            <div className="tracking-[0.2em] text-white hover:text-zinc-400	 ease-in duration-200">Faq</div>
         </div>
      </header>
   );
}
export default Header;
