/* import { Cabecalho } from "./components/cabecalho";
import { CustomButton } from "./components/custom-button";
import { CustomImagem } from "./components/imagem";
import { ListaItens } from "./components/lista-items";
import { Paragrafo } from "./components/paragrafo";
import { Quadrado } from "./components/quadrado";
import { Rodape } from "./components/rodape";
import { Titulo } from "./components/titulo"; */

type AvatarProps = {
  size?: number;
};
//Props: pode ter valor padrão, pode ser opcional,

function Avatar({ size }: AvatarProps) {
  console.log(size);
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={size}
      height={size}
    />
  );
}

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  console.log(children);
  return (
    <div className="p-3 bg-blue-500 text-white border border-black rounded-lg">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-start gap-4">
      <h1>Página Home</h1>
      {/*       <button className="bg-red-500 px-4 py-2 rounded-xl text-white font-bold">
        Botão nativo
      </button> */}
      {/* <Quadrado />
      <Titulo />
      <CustomButton />
      <ListaItens />
      <CustomImagem />
      <Paragrafo />
      <Cabecalho />
      <Rodape /> */}
      <Avatar size={100} />
      <Avatar size={75} />
      <Avatar size={50} />
      <Card>
        <span>teste</span>
        <span>teste</span>
      </Card>
    </div>
  );
}
