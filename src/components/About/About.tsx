"use client";
import Image from "next/image";
import imageabout from "../../../public/imageabout.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center pt-10 scroll-mt-10 lg:scroll-mt-28"
    >
      <div className="px-8 pb-32 flex flex-col justify-center items-center gap-8 md:gap-4 md:flex-row lg:max-w-[800px] xl:max-w-[1000px]">
        <Image
          src={imageabout}
          alt="Ilustração"
          className="w-ful md:w-6/12"
          data-aos="fade-up"
        />

        <div
          className="max-w-lg space-y-6 text-center md:text-right"
          data-aos="fade-up"
        >
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
