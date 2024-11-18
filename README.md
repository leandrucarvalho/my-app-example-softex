# Projeto de Consulta de Endereço com CEP

Este projeto é uma aplicação em React que permite ao usuário consultar endereços com base em um CEP digitado. Os endereços consultados são armazenados em um histórico e salvos no `localStorage` do navegador para que possam ser acessados posteriormente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **date-fns**: Biblioteca para manipulação de datas, usada para formatar datas em relação ao tempo atual.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.

## Funcionalidades

1. **Consulta de Endereço**:
   - O usuário digita um CEP válido e clica no botão "Obter endereço".
   - A aplicação faz uma requisição assíncrona para buscar os dados do endereço.
   - Em caso de erro (CEP inválido), uma mensagem de alerta é exibida.

2. **Exibição de Endereço**:
   - O endereço consultado é exibido na tela.

3. **Histórico de Endereços**:
   - Os endereços consultados são salvos em um histórico que é exibido em uma tabela.
   - As entradas da tabela incluem detalhes como rua, bairro, cidade, estado, CEP e o tempo desde a consulta.
   - O histórico é persistido no `localStorage` e é carregado quando a página é recarregada.

## Estrutura do Código

### Componente Principal
O componente principal `Home` é responsável por:
- Capturar o CEP digitado pelo usuário.
- Executar a requisição assíncrona para obter o endereço.
- Renderizar o resultado da busca e o histórico de endereços consultados.

### Interface `Address`
Define a estrutura de um endereço com os seguintes campos:
- `id`: Identificador único.
- `logradouro`, `bairro`, `localidade`, `estado`, `cep`: Detalhes do endereço.
- `consultedAt`: Data e hora em que o endereço foi consultado.

### Hooks Utilizados
- **useState**: Para gerenciar o estado dos endereços, o CEP digitado e o status de carregamento.
- **useEffect**: Para carregar e salvar o histórico de endereços no `localStorage`.

## Como Executar o Projeto

1. Clone o repositório.
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências.
   ```bash
   npm install
   ```
3. Inicie o projeto.
   ```bash
   npm start
   ```
4. Acesse a aplicação em `http://localhost:3000` no seu navegador.

## Melhorias Futuras
- Implementar validação mais robusta para o CEP.
- Adicionar testes unitários para garantir a funcionalidade correta.
- Melhorar a interface com mensagens de erro mais detalhadas.

## Considerações
Este projeto foi desenvolvido com fins educativos para ilustrar o uso de hooks, manipulação de estado e armazenamento no `localStorage` em uma aplicação React.

