"use client";

import { getAddress } from "../../get-address";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);

  async function handleGetAddress() {
    setLoading(true);

    try {
      const result = await getAddress("53370140");
      setAddress(result.logradouro);

      console.log(result.logradouro);
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
        <button
          onClick={handleGetAddress}
          className="px-3 py-2 rounded-lg bg-primary text-white font-bold"
        >
          Obter endereço
        </button>
        <p>
          Endereço obtido: <span>{loading ? "Carregando..." : address}</span>
        </p>
      </div>
    </>
  );
}
