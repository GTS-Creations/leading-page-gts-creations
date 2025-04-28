import MenuHambuguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../../public/LOGO.png"
import Image from "next/image";

const links = [
  {
    id: 0,
    url: "#start",
    name: "Início",
  },
  {
    id: 1,
    url: "#about",
    name: "Sobre",
  },
  {
    id: 2,
    url: "#services",
    name: "Serviços",
  },
  {
    id: 3,
    url: "#testimonials",
    name: "Depoimentos",
  },
  {
    id: 4,
    url: "#contacts",
    name: "Contatos",
  },
];

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-black py-4 px-8 lg:px-0 flex justify-between lg:justify-around items-center text-white">
      <div>
        <Image src={logo} alt="Logo GTS Creations" width={100} height={100} />
      </div>

      <div className="lg:hidden">
        <MenuHambuguer />
      </div>

      <div className="hidden lg:block">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.id} className="hover:text-gray-400">
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
