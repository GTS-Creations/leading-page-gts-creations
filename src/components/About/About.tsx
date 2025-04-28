import Image from "next/image";
import imageabout from "../../../public/imageabout.png";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <div className="px-8 pb-32 flex flex-col justify-center items-center gap-8 md:gap-4 md:flex-row lg:max-w-[800px] xl:max-w-[1000px]">
        <Image
          src={imageabout}
          alt="Ilustração"
          className="w-ful md:w-6/12"
        />
        <div className="max-w-lg space-y-6 text-right">
          <h2 className="text-4xl font-bold">Sobre nós</h2>
          <p className="text-gray-400">
            Na GTS Creations, acreditamos que cada marca tem uma história única
            para contar. Nosso propósito é transformar essa história em um site
            que inspire, conecte e gere resultados. Combinamos design criativo,
            tecnologia de ponta e estratégias eficientes para entregar sites
            personalizados, rápidos e otimizados. Seja para fortalecer sua
            presença digital, conquistar novos clientes ou impulsionar vendas,
            estamos aqui para construir muito mais do que um site: estamos aqui
            para construir seu próximo capítulo online. Vamos criar algo
            incrível juntos.
          </p>
        </div>
      </div>
    </section>
  );
}
