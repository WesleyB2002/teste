const express = require('express');
const router = express.Router();
const imagemProdutoModel = require('../models/imagemProduto');

router.get('/:produtoId', (req, res) => {
  const produtoId = req.params.produtoId;
  imagemProdutoModel.getImagensByProdutoId(produtoId, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const imagem = req.body;
  imagemProdutoModel.createImagemProduto(imagem, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(results);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  imagemProdutoModel.deleteImagemProduto(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
