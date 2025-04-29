"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center pt-20"
    >
      <div className="px-8 pb-32 flex flex-col justify-center items-center gap-8 w-full md:gap-4 lg:max-w-[800px] xl:max-w-[1000px]">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Depoimentos
        </h2>
        <p className="text-gray-400 text-center" data-aos="fade-up">
          A satisfação dos nossos clientes é a nossa maior conquista. Confira o
          que quem já confiou no nosso trabalho tem a dizer sobre a experiência
          de criar seus projetos digitais com a gente.
        </p>
        <div
          className="flex items-center justify-center w-full"
          data-aos="zoom-in"
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="-mt-1 h-[230px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1">
                  <div className="p-1">
                    <Card className="max-w-[1000px]">
                      <CardContent className="flex justify-center -py-4">
                        <div className="w-full rounded-lg border p-4 shadow-sm">
                          {/* Estrelas */}
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, index) => (
                              <FaStar
                                key={index}
                                className="w-5 h-5 text-gray-400"
                                color="#e5e61a"
                              />
                            ))}
                          </div>

                          {/* Título e corpo */}
                          <h3 className="text-lg font-semibold text-gray-900">
                            Review title
                          </h3>
                          <p className="text-gray-600 mb-4">Review body</p>

                          {/* Informações do revisor */}
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Reviewer name
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
