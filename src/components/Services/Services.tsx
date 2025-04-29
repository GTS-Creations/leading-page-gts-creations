"use client";
import Image from "next/image";
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpg";
import image3 from "../../../public/image3.jpg";
import image4 from "../../../public/image4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center pt-20"
    >
      <div className="px-8 pb-32 flex flex-col justify-center items-center gap-8 md:gap-4 lg:max-w-[800px] xl:max-w-[1000px]">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Nossos serviços
        </h2>
        <p className="text-center text-gray-400" data-aos="fade-up">
          Soluções digitais pensadas para impulsionar seus resultados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Repetir para cada serviço */}
          <div
            className="bg-white/10 p-6 rounded-lg text-center"
            data-aos="zoom-in"
          >
            <div className="h-40 bg-gray-700 rounded mb-4">
              <Image
                src={image1}
                alt="Imagem de exemplo"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-bold">Criação de Sites</h3>
          </div>

          <div
            className="bg-white/10 p-6 rounded-lg text-center"
            data-aos="zoom-in"
          >
            <div className="h-40 bg-gray-700 rounded mb-4">
              <Image
                src={image2}
                alt="Imagem de exemplo"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-bold">Lojas Virtuais</h3>
          </div>

          <div
            className="bg-white/10 p-6 rounded-lg text-center"
            data-aos="zoom-in"
          >
            <div className="h-40 bg-gray-700 rounded mb-4">
              <Image
                src={image3}
                alt="Imagem de exemplo"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-bold">Landing Pages</h3>
          </div>

          <div
            className="bg-white/10 p-6 rounded-lg text-center"
            data-aos="zoom-in"
          >
            <div className="h-40 bg-gray-700 rounded mb-4">
              <Image
                src={image4}
                alt="Imagem de exemplo"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-bold">Manutenção e Suporte</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
