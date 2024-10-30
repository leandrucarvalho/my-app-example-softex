"use client";

import { getAddress } from "../../get-address";
import { useState } from "react";

interface Address {
  id: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
  cep: string;
}

/* const address2: Address[] = [
  {
    id: "1",
    logradouro: "Rua 1",
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    cep: "53370140",
  },
  {
    id: "2",
    logradouro: "Rua 2",
    bairro: "Centro 2",
    cidade: "Recife",
    estado: "PE",
    cep: "53370140",
  },
  {
    id: "3",
    logradouro: "Rua 3",
    bairro: "Ouro Preto",
    cidade: "Olinda",
    estado: "PE",
    cep: "53370140",
  },
  {
    id: "4",
    logradouro: "Rua 4",
    bairro: "Centro 4",
    cidade: "Recife",
    estado: "PE",
    cep: "53370140",
  },
  {
    id: "5",
    logradouro: "Rua 5",
    bairro: "Centro 5",
    cidade: "Recife",
    estado: "PE",
    cep: "53370140",
  },
]; */

export default function Home() {
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [inputCep, setInputCep] = useState("");
  const [estadosObtidos, setEstadosObtidos] = useState<Address[]>([]);

  async function handleGetAddress() {
    setLoading(true);

    try {
      const result = await getAddress(inputCep);
      if (result?.erro === "true") {
        alert("CEP inválido");
        return;
      }
      console.log(result);

      const newAddress = [...estadosObtidos, result];
      setEstadosObtidos(newAddress);
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

        <ul>
          {estadosObtidos.map((endereco) => (
            <li key={endereco.localidade}>{endereco.localidade}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
