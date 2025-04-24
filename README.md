
# API Filmes

API de Filmes

## Configuração do Projeto para VS Code

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [VS Code](https://code.visualstudio.com/download)

### Como executar o projeto

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd filmes
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em [http://127.0.0.1:3000/movies](http://127.0.0.1:3000/movies)


## Tecnologias utilizadas

- Node
- Express
- MySQL
- Nodemon


## Requisições HTTP

- GET: http://127.0.0.1:3000/movies (busca todos os filmes)
- GET: http://127.0.0.1:3000/movies/:id (busca filme por ID)
- POST: http://127.0.0.1:3000/movies (passar movie e genre = [] como parâmetro)
- PUT: http://127.0.0.1:3000/movies/:id (passar id no url e depois passar movie ou genre = [] como parâmetro para atualização)
- DELETE: http://127.0.0.1:3000/movies/:id (passar id como parâmetro para deletar um filme)
