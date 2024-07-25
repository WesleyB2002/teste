const db = require("../config/db");

const getAllClientes = (callback) => {
  db.query("SELECT * FROM clientes", callback);
};

const getClienteById = (id, callback) => {
  db.query("SELECT * FROM clientes WHERE id = ?", [id], callback);
};

const createCliente = (cliente, callback) => {
  db.query("INSERT INTO clientes SET ?", cliente, callback);
};

const updateCliente = (id, cliente, callback) => {
  db.query("UPDATE clientes SET ? WHERE id = ?", [cliente, id], callback);
};

const deleteCliente = (id, callback) => {
  db.query("DELETE FROM clientes WHERE id = ?", [id], callback);
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
