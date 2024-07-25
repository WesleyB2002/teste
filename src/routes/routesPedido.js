const express = require('express');
const router = express.Router();
const pedidoModel = require('../models/pedido');
const itemPedidoModel = require('../models/itemPedido');

router.get('/', (req, res) => {
  pedidoModel.getAllPedidos((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  pedidoModel.getPedidoById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const pedido = req.body;
  pedidoModel.createPedido(pedido, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(results);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const pedido = req.body;
  pedidoModel.updatePedido(id, pedido, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  pedidoModel.deletePedido(id, (err, results) => {
    if (err) return res.status(500).send(err);
    // Excluindo itens do pedido
    itemPedidoModel.getItensByPedidoId(id, (err, itens) => {
      if (err) return res.status(500).send(err);
      itens.forEach(item => {
        itemPedidoModel.deleteItemPedido(item.id, () => {});
      });
    });
    res.json(results);
  });
});

module.exports = router;
