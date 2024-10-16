async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.logradouro);
}

getAddress("53370140");
