import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import CustomButton from "./Custombutton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full border-b bg-white/95 px-6 backdrop-blur-[5px] supports-[backdrop-filter]:bg-white/50 md:px-10">
      <nav className="flex w-full items-center justify-between">
        <div className="flex md:hidden">
          <MobileNav />
        </div>

        <div className="flex w-full items-center justify-center gap-12 md:justify-start">
          <a href="/" className="flex items-center justify-center gap-2">
            <img
              src="/assets/images/w-light.svg"
              alt="w logo light"
              width={30}
              height={30}
            />
            <img
              src="/assets/images/separator.svg"
              alt="separator"
              width={20}
              height={20}
              className="hidden -rotate-12 sm:block"
            />
            <p className="hidden font-bold sm:block">WILL TO CODE</p>
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <div className="hidden md:block">
            <NavItems />
          </div>
          <CustomButton text="Login" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
