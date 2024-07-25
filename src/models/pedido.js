const db = require("../config/db");

const getAllPedidos = (callback) => {
  db.query("SELECT * FROM pedidos", callback);
};

const getPedidoById = (id, callback) => {
  db.query("SELECT * FROM pedidos WHERE id = ?", [id], callback);
};

const createPedido = (pedido, callback) => {
  db.query("INSERT INTO pedidos SET ?", pedido, callback);
};

const updatePedido = (id, pedido, callback) => {
  db.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id], callback);
};

const deletePedido = (id, callback) => {
  db.query("DELETE FROM pedidos WHERE id = ?", [id], callback);
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  createPedido,
  updatePedido,
  deletePedido,
};
