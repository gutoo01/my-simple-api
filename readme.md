# API com 2 métodos HTTP usando Atlas MongoDB


Esta é uma API simples que contém apenas dois métodos HTTP: GET e POST. A API usa o serviço de banco de dados gerenciado Atlas MongoDB para armazenar e recuperar dados internamente cadastrados.

## Rotas

- GET /personal

  Esta rota retorna uma lista dos dados armazenados na coleção "personal" do banco de dados. A resposta é um array JSON contendo todos os objetos da coleção.

  ```json
  [
    {
      "name": "Fulano 1",
      "vocational": "Software Enginner"
    },
    {
      "name": "Fulano 2",
      "vocational": "Confeiteiro"
    }
  ]
  ```

- POST /personal
  
  Esta rota adiciona um novo objeto à coleção "personal" do banco de dados. O corpo da requisição deve ser um objeto JSON contendo os campos "name" e "vocational".

  ```json
  {
    "name": "beltrano",
    "vocational": "profissão"
  }
  ```

## Como usar

  Para usar esta API, é necessário configurar uma instância do serviço de banco de dados gerenciado Atlas MongoDB. Em seguida, configure a variável de ambiente MONGODB_URI com a URI de conexão do seu banco de dados.

  Depois disso, instale as dependências do projeto e execute o servidor:

  ```bash
  npm install
  npm start
  ```

  O servidor estará disponível em http://localhost:3000