import Image from "next/image";
import imageabout from "../../../public/imagestart.png";

export default function Start() {
  return (
    <section id="start" className="flex flex-col items-center justify-center">
      <div className="pt-28 pb-32 px-8 flex flex-col justify-center items-center gap-8 md:gap-4 md:flex-row lg:max-w-[800px] xl:max-w-[1000px]">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Seu site. Sua história. Nosso compromisso.
          </h1>
          <p className="text-gray-400">
            Cada site que criamos é pensado para contar sua história de forma
            autêntica e impactante.
          </p>
          <div className="flex gap-4 text-center">
            <a
              className="bg-white hover:bg-white/80 text-black px-6 py-3 rounded-full font-bold cursor-pointer"
              href="https://wa.me/5587988343936"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Converse comigo pelo WhatsApp"
            >
              FALE CONOSCO
            </a>
            <a
              className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-full font-bold cursor-pointer"
              href="#services"
            >
              NOSSOS SERVIÇOS
            </a>
          </div>
        </div>

        <Image src={imageabout} alt="Ilustração" className="w-ful md:w-6/12" />
      </div>
    </section>
  );
}
