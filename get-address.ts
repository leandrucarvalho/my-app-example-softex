async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.logradouro);
  } catch (error) {
    console.error(error);
  }
}

getAddress("53370140");
