import { footerLinks } from "../constants";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="flex min-h-[300px] w-full border-t">
      <div className="wrapper">
        <div className="grid-cols-footer grid gap-8 lg:flex lg:flex-wrap lg:justify-between">
          <div className="col-span-full flex items-center justify-between lg:items-start">
            <a href="/" className="flex items-center justify-center">
              <img
                src="/assets/images/w-light.svg"
                alt="w logo light"
                width={30}
                height={30}
              />
              <img
                src="/assets/images/separator.svg"
                alt="separator"
                width={28}
                height={28}
                className="hidden -rotate-12 sm:block"
              />
              <p className="hidden font-bold sm:block">WILL TO CODE</p>
            </a>
            <div className="flex lg:hidden">
              <Socials />
            </div>
          </div>

          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="mt-2 flex flex-col items-start gap-3 text-sm"
            >
              <h4 className="font-bold">{link.title}</h4>
              <div className="flex flex-col gap-2">
                {link.links.map((sublink) => (
                  <a
                    href={sublink.url}
                    key={sublink.label}
                    className="opacity-70  transition-colors hover:opacity-100"
                  >
                    {sublink.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-xs opacity-70">
            &copy; Will To Code 2024, inc. All rights reserved.
          </p>
          <div className="hidden lg:block">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
