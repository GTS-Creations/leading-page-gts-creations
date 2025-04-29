"use client";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [data, setData] = useState("");

  useEffect(() => {
    function DateFormated() {
      const dataAtual = new Date();
      const ano = dataAtual.getFullYear();

      setData(`${ano}`);
    }

    DateFormated();
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-neutral-950 via-black to-neutral-950 p-4 flex justify-center items-center text-white text-center">
      <p>
        Criado por <strong>GTS Creations &copy;</strong>, {data}, Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
