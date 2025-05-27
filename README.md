# API de Gerenciamento de Produtos

## Descrição
API REST feita em Node.js + Express para realizar operações CRUD (Create, Read, Update, Delete) de produtos.

## Tecnologias
- Node.js
- Express
- Postman (para testes)

## Como rodar
```bash
npm install
npm start
```

## Endpoints
- POST /api/produtos
- GET /api/produtos
- GET /api/produtos/:id
- PUT /api/produtos/:id
- DELETE /api/produtos/:id

## Exemplo de JSON
```json
{
  "nome": "Monitor Gamer",
  "preco": 1299.99,
  "descricao": "Monitor 27 polegadas 144Hz"
}
```