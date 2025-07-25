import { menu } from "@/data/menu";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="grid md:flex items-center gap-8">
      {menu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
