const express = require('express')
const app = express();
const mysql = require('mysql');
const port = 8000;
const connection = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    port: 3306,
    user: "b5566eaa1acbbc",
    database: "heroku_8f4e7a97300436f",
    password: "b58c37ab"
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