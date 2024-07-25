const express = require('express');
const router = express.Router();
const produtoModel = require('../models/produto');
const imagemProdutoModel = require('../models/imagemProduto');

router.get('/', (req, res) => {
  produtoModel.getAllProdutos((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  produtoModel.getProdutoById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const produto = req.body;
  produtoModel.createProduto(produto, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(results);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const produto = req.body;
  produtoModel.updateProduto(id, produto, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  produtoModel.deleteProduto(id, (err, results) => {
    if (err) return res.status(500).send(err);

    imagemProdutoModel.getImagensByProdutoId(id, (err, imagens) => {
      if (err) return res.status(500).send(err);
      imagens.forEach(imagem => {
        imagemProdutoModel.deleteImagemProduto(imagem.id, () => {});
      });
    });
    res.json(results);
  });
});

module.exports = router;
