"use client";
import Image from "next/image";
import clecio from "../../../public/clecio.png";
import gabriel from "../../../public/gabriel.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="px-8 pb-32 flex flex-col justify-center items-center gap-8 w-full md:gap-4 lg:max-w-[800px] xl:max-w-[1000px]">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Nossa equipe
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center w-[300px]" data-aos="zoom-in">
            <Image
              src={gabriel}
              alt="Membro"
              width={120}
              height={120}
              className="rounded-full mx-auto -mb-8"
            />
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mt-4">Patrício Gabriel</h3>
              <p className="text-sm text-gray-400">Engenheiro de Software</p>
              <em className="text-sm text-gray-400 text-">
                "Performance e segurança que você não vê, mas sente."
              </em>
            </div>
          </div>

          <div className="text-center w-[300px]" data-aos="zoom-in">
            <Image
              src={clecio}
              alt="Membro"
              width={120}
              height={120}
              className="rounded-full mx-auto -mb-8"
            />
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mt-4">Clécio Lira</h3>
              <p className="text-sm text-gray-400">Engenheiro de Software</p>
              <em className="text-sm text-gray-400">
                "O que move seu projeto acontece nos bastidores."
              </em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
