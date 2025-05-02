"use client";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-neutral-800 via-black to-neutral-800 py-10"
    >
      <div className="px-8 flex flex-col justify-center items-center gap-8 md:gap-4 lg:max-w-[800px] xl:max-w-[1000px]">
        <p
          className="text-gray-400 mb-2 tracking-widest uppercase text-sm"
          data-aos="fade-up"
        >
          Tem uma ideia?
        </p>
        <h2
          className="text-4xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
        >
          Conte com a gente
          <br />
          para tirar do papel.
        </h2>

        <p
          className="max-w-xl text-gray-300 mb-8 text-center"
          data-aos="fade-up"
        >
          Estamos prontos para transformar sua ideia em realidade. Entre em
          contato conosco para orçamentos, parcerias ou apenas bater um papo
          sobre seu projeto.
        </p>

        <div className="mb-8 space-y-2">
          <p data-aos="fade-up">
            <strong>Email:</strong> creationsgts@gmail.com
          </p>
          <p data-aos="fade-up">
            <strong>Telefone:</strong> (87) 98834-3936
          </p>
          <p data-aos="fade-up">
            <strong>Endereço:</strong> Arcoverde, PE - Brasil
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-10">
          <a
            href="https://wa.me/5587988343936"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Converse comigo pelo WhatsApp"
            className="text-green-400 hover:text-green-300"
            data-aos="fade-up"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://www.instagram.com/gtscreationsofc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Converse comigo pelo Instagram"
            className="text-pink-400 hover:text-pink-300"
            data-aos="fade-up"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/company/gtscreations/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Converse comigo pelo LinkedIn"
            className="text-blue-400 hover:text-blue-300"
            data-aos="fade-up"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
