import { Cabecalho } from "./components/cabecalho";
import { CustomButton } from "./components/custom-button";
import { CustomImagem } from "./components/imagem";
import { ListaItens } from "./components/lista-items";
import { Paragrafo } from "./components/paragrafo";
import { Quadrado } from "./components/quadrado";
import { Rodape } from "./components/rodape";
import { Titulo } from "./components/titulo";

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-start gap-4">
      <h1>Página Home</h1>
      <button className="bg-red-500 px-4 py-2 rounded-xl text-white font-bold">
        Botão nativo
      </button>
      <Quadrado />
      <Titulo />
      <CustomButton />
      <ListaItens />
      <CustomImagem />
      <Paragrafo />
      <Cabecalho />
      <Rodape />
    </div>
  );
}
