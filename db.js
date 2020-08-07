const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

// Configure Database
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
db.defaults({sanpham:[],dichvu:[],nguoidung:[]}).write();

module.exports = db;