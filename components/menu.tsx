import { menu } from "@/data/menu";
import Link from "next/link";
import { FC } from "react";

interface MenuProps {
  menuClick?: () => void;
}

const Menu: FC<MenuProps> = ({ menuClick }) => {
  return (
    <ul className="grid md:flex items-center gap-8">
      {menu.map((item, index) => (
        <li key={index}>
          <Link href={item.href} onClick={menuClick}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;