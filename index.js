const express = require('express');
const app = express();
app.use(express.json());

const produtos = [];
let id = 1;

// Criar produto
app.post('/api/produtos', (req, res) => {
    const produto = { id: id++, ...req.body };
    produtos.push(produto);
    res.status(201).json(produto);
});

// Listar produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// Buscar produto por ID
app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json(produto);
});

// Atualizar produto
app.put('/api/produtos/:id', (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    produtos[index] = { id: produtos[index].id, ...req.body };
    res.json(produtos[index]);
});

// Deletar produto
app.delete('/api/produtos/:id', (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    produtos.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});