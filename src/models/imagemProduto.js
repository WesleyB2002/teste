const db = require("../config/db");

const getImagensByProdutoId = (produtoId, callback) => {
  db.query(
    "SELECT * FROM imagens_produtos WHERE produto_id = ?",
    [produtoId],
    callback
  );
};

const createImagemProduto = (imagem, callback) => {
  db.query("INSERT INTO imagens_produtos SET ?", imagem, callback);
};

const deleteImagemProduto = (id, callback) => {
  db.query("DELETE FROM imagens_produtos WHERE id = ?", [id], callback);
};

module.exports = {
  getImagensByProdutoId,
  createImagemProduto,
  deleteImagemProduto,
};
