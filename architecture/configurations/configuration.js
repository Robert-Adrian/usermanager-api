const express = require('express')
const app = express();
const mysql = require('mysql');
const port = 8000;
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "usermanager",
    password: ""
});
const router = express.Router();

module.exports = {
    express,
    app,
    mysql,
    port,
    connection,
    router
};