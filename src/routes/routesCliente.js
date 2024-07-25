const express = require('express');
const router = express.Router();
const clienteModel = require('../models/cliente');

router.get('/', (req, res) => {
  clienteModel.getAllClientes((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  clienteModel.getClienteById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const cliente = req.body;
  clienteModel.createCliente(cliente, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(results);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const cliente = req.body;
  clienteModel.updateCliente(id, cliente, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  clienteModel.deleteCliente(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
