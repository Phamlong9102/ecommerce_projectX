function Header() {
   return (
      <header className="w-full hidden lg:flex xl:flex 2xl:flex text-color-header header-color header-height items-center justify-between leading-[0rem] select-none">
         <div className="ml-12">
            <span className="text-xs">Free shipping on domestic orders over $150</span>
         </div>
         <div className="flex uppercase  text-[11px] mr-12 tracking-wide cursor-pointer">
            <div className="mr-6 tracking-[0.2em]  hover:text-zinc-400 ease-in duration-200">Sign in</div>
            <div className="mr-6 tracking-[0.2em] hover:text-zinc-400 ease-in duration-200">Contact us</div>
            <div className="tracking-[0.2em] hover:text-zinc-400	 ease-in duration-200">Faq</div>
         </div>
      </header>
   );
}
export default Header;
