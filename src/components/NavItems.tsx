import { headerLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="flex w-full flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
      {headerLinks.map((link) => {
        return (
          <li
            key={link.label}
            className="flex-center whitespace-nowrap font-medium opacity-70 transition-colors hover:opacity-100"
          >
            <a href={link.route}>{link.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
