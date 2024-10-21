"use client";

import { getAddress } from "../../get-address";

/* import { Cabecalho } from "./components/cabecalho";
import { CustomButton } from "./components/custom-button";
import { CustomImagem } from "./components/imagem";
import { ListaItens } from "./components/lista-items";
import { Paragrafo } from "./components/paragrafo";
import { Quadrado } from "./components/quadrado";
import { Rodape } from "./components/rodape";
import { Titulo } from "./components/titulo"; */

// type AvatarProps = {
//   size?: number;
// };
//Props: pode ter valor padrão, pode ser opcional,

// function Avatar({ size }: AvatarProps) {
//   console.log(size);
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={size}
//       height={size}
//     />
//   );
// }

// type CardProps = {
//   children: React.ReactNode;
// };

// function Card({ children }: CardProps) {
//   console.log(children);
//   return (
//     <div className="p-3 bg-blue-500 text-white border border-black rounded-lg">
//       {children}
//     </div>
//   );
// }

export default function Home() {
  async function handleGetAddress() {
    const result = await getAddress("53370140");
    console.log(result);
  }

  return (
    <div className="p-10 flex flex-col items-start gap-4">
      <button
        onClick={handleGetAddress}
        className="px-3 py-2 rounded-lg bg-primary text-white font-bold"
      >
        Obter endereço
      </button>
      <p>
        Endereço obtido: <span></span>
      </p>
    </div>
  );
}
