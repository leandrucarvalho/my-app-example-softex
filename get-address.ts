export async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Simular um delay de 2 segundos antes de retornar os dados
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  } catch (error) {
    console.error(error);
  }
}
