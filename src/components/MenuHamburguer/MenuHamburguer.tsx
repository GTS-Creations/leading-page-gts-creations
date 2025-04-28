import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

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

export default function MenuHambuguer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="cursor-pointer hover:bg-gray-300 rounded-sm bg-white">
          <RxHamburgerMenu color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[200px]">
        <SheetHeader>
          <div className="flex items-center justify-center pt-10">
            <ul className="flex flex-col gap-8">
              {links.map((link) => (
                <SheetTitle key={link.id}>
                  <li className="hover:text-gray-400">
                    <a href={link.url}>{link.name}</a>
                  </li>
                </SheetTitle>
              ))}
            </ul>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
