"use client";

import { formatDistanceToNow } from "date-fns";
import { getAddress } from "../../get-address";
import { useState } from "react";
import { ptBR } from "date-fns/locale";

interface Address {
  id: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
  cep: string;
  consultedAt: Date;
}

function formatDate(date: Date) {
  const result = formatDistanceToNow(new Date(date), {
    includeSeconds: true,
    locale: ptBR,
  });
  return result;
}

export default function Home() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputCep, setInputCep] = useState("");
  const [estadosObtidos, setEstadosObtidos] = useState<Address[]>([]);

  async function handleGetAddress() {
    setLoading(true);

    try {
      const result = await getAddress(inputCep);
      if (result?.erro) {
        alert("CEP inválido");
        return;
      }
      const newAddress: Address = {
        id: self.crypto.randomUUID(),
        consultedAt: new Date(),
        ...result,
      };

      setEstadosObtidos((prev) => [...prev, newAddress]);
      setAddress(result.logradouro);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="p-2">Página Home</h1>
      <div className="p-10 flex flex-col items-start gap-4">
        <label htmlFor="cep">CEP</label>
        <input
          className="px-3 py-2 rounded-lg border border-black text-primary font-bold"
          placeholder="Digite um CEP válido:"
          type="text"
          onChange={(e) => setInputCep(e.target.value)}
        />
        <button
          onClick={handleGetAddress}
          className="px-3 py-2 rounded-lg bg-primary text-white font-bold"
          disabled={inputCep === ""}
        >
          Obter endereço
        </button>
        <p>
          Endereço obtido: <span>{loading ? "Carregando..." : address}</span>
        </p>

        <h2 className="mt-4 font-bold">Histórico de endereços:</h2>
        <table className="table-auto border-collapse border border-gray-500 w-full mt-4 bg-primary text-white">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Rua</th>
              <th className="border border-black px-4 py-2">Bairro</th>
              <th className="border border-black px-4 py-2">Cidade</th>
              <th className="border border-black px-4 py-2">Estado</th>
              <th className="border border-black px-4 py-2">CEP</th>
              <th className="border border-black px-4 py-2">Consultado Há</th>
            </tr>
          </thead>
          <tbody>
            {estadosObtidos.map((endereco) => (
              <tr key={endereco.id}>
                <td className="border border-black px-4 py-2">{endereco.logradouro}</td>
                <td className="border border-black px-4 py-2">{endereco.bairro}</td>
                <td className="border border-black px-4 py-2">{endereco.localidade}</td>
                <td className="border border-black px-4 py-2">{endereco.estado}</td>
                <td className="border border-black px-4 py-2">{endereco.cep}</td>
                <td className="border border-black px-4 py-2">{formatDate(endereco.consultedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
