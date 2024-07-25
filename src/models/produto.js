const db = require("../config/db");

const getAllProdutos = (callback) => {
  db.query("SELECT * FROM produtos", callback);
};

const getProdutoById = (id, callback) => {
  db.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
};

const createProduto = (produto, callback) => {
  db.query("INSERT INTO produtos SET ?", produto, callback);
};

const updateProduto = (id, produto, callback) => {
  db.query("UPDATE produtos SET ? WHERE id = ?", [produto, id], callback);
};

const deleteProduto = (id, callback) => {
  db.query("DELETE FROM produtos WHERE id = ?", [id], callback);
};

module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
