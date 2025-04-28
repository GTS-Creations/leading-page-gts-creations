import Image from "next/image";
import imageabout from "../../../public/imageabout.png";

export default function Start() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center"
    >
      <div className="py-40 px-8 flex flex-col justify-center items-center gap-8 md:gap-4 md:flex-row lg:max-w-[800px] xl:max-w-[1000px]">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Seu site. Sua história. Nosso compromisso.
          </h1>
          <p className="text-gray-400">
            Cada site que criamos é pensado para contar sua história de forma
            autêntica e impactante.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
              FALE CONOSCO
            </button>
            <button className="bg-green-400 text-black px-6 py-3 rounded-full font-bold">
              NOSSOS SERVIÇOS
            </button>
          </div>
        </div>

        <Image src={imageabout} alt="Ilustração" className="w-ful md:w-6/12 z-50" />
      </div>
    </section>
  );
}
