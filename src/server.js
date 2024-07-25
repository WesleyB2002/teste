const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const produtoRoutes = require('../src/routes/routesProduto');
const clienteRoutes = require('../src/routes/routesCliente');
const pedidoRoutes = require('../src/routes/routesPedido');
const imagemProdutoRoutes = require('../src/routes/routesImagemProduto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/imagens-produto', imagemProdutoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
