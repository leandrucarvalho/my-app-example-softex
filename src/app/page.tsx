import { CustomButton } from "./components/custom-button";

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-start gap-4">
      <h1>Página Home</h1>
      <CustomButton />
      <button className="bg-red-500 px-4 py-2 rounded-xl text-white font-bold">
        Botão nativo
      </button>
    </div>
  );
}
