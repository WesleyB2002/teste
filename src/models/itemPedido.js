const db = require("../config/db");

const getItensByPedidoId = (pedidoId, callback) => {
  db.query(
    "SELECT * FROM itens_pedido WHERE pedido_id = ?",
    [pedidoId],
    callback
  );
};

const createItemPedido = (item, callback) => {
  db.query("INSERT INTO itens_pedido SET ?", item, callback);
};

const deleteItemPedido = (id, callback) => {
  db.query("DELETE FROM itens_pedido WHERE id = ?", [id], callback);
};

module.exports = { getItensByPedidoId, createItemPedido, deleteItemPedido };
