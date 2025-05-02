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
import Image from "next/image";

import person1 from "../../../public/person1.jpeg";
import person2 from "../../../public/person2.jpeg";
import person3 from "../../../public/person3.jpg";
import person4 from "../../../public/person4.jpg";

const testimonials = [
  {
    id: 1,
    title: "Site moderno e bem estruturado desenvolvido com excelência",
    body: "A empresa responsável pelo desenvolvimento do site Arcoverde Agora está de parabéns! O resultado é uma plataforma moderna, rápida e intuitiva, que valoriza tanto o conteúdo quanto a experiência do usuário. A navegação é fluida, o layout é agradável e responsivo, e tudo foi pensado para facilitar o acesso às informações. É notável o cuidado com os detalhes e o profissionalismo em cada parte do projeto. Um trabalho realmente de alto nível!",
    reviewerAvatar: person1,
    reviewerName: "Jefferson Gomes",
  },
  {
    id: 2,
    title: "Profissionalismo e excelência em cada projeto",
    body: "A empresa GTS Creations é extremamente competente e demonstra um alto nível de profissionalismo na criação de sites. Seus projetos são modernos, bem estruturados e pensados para oferecer a melhor experiência ao usuário. Além disso, são muito elogiados pela atenção aos detalhes, cumprimento de prazos e suporte eficiente. Sem dúvida, é uma empresa altamente recomendável para quem busca qualidade e confiança no desenvolvimento de sites.",
    reviewerAvatar: person2,
    reviewerName: "Laura Candido",
  },
  {
    id: 3,
    title: "Muito além de um site: entregaram uma experiência completa",
    body: "O que mais me impressionou foi o cuidado em entender a essência do nosso negócio e transformar isso em uma interface clara, moderna e funcional. Não foi apenas a entrega de um site bonito — eles construíram uma experiência completa, pensada para o usuário final, com foco em performance, acessibilidade e conversão. O projeto seguiu um cronograma bem definido e foi finalizado antes do prazo, com total transparência durante o processo. Com certeza, essa parceria vai continuar por muito tempo.",
    reviewerAvatar: person3,
    reviewerName: "Ricardo Oliveira",
  },
  {
    id: 4,
    title: "Profissionalismo, criatividade e compromisso em cada etapa",
    body: "Contratar a equipe foi, sem dúvida, uma das melhores decisões que tomamos para o nosso projeto. Desde o inicio, eles demonstraram domínio técnico, escuta ativa e criatividade na construção do layout. Cada detalhe do site foi pensado estrategicamente para proporcionar uma navegação fluida e uma identidade visual consistente com a nossa marca. Além disso, o atendimento durante e após o desenvolvimento foi impecável — sempre disponíveis para ajustes e dúvidas, com respostas rápidas e eficientes. Recomendo fortemente para qualquer empresa que busca excelência no digital.",
    reviewerAvatar: person4,
    reviewerName: "Fernanda Ribeiro",
  },
];

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
      className="flex flex-col items-center justify-center pt-20 lg:scroll-mt-20"
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
            className="w-full"
          >
            <CarouselContent className="-mt-1">
              {testimonials.map((test) => (
                <CarouselItem key={test.id} className="pt-1">
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
                            {test.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{test.body}</p>

                          {/* Informações do revisor */}
                          <div className="flex items-center gap-2">
                            <Image
                              src={test.reviewerAvatar}
                              alt="Avatar"
                              className="w-6 h-6 rounded-full object-cover object-top"
                            />
                            <p className="text-sm font-medium text-gray-900">
                              {test.reviewerName}
                            </p>
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
