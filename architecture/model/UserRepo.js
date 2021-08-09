
const UserGetDataRepo = (connection, callback) => {
        connection.query('SELECT * FROM user_data_vw', callback, function(error, results, fields) {});
};

const UserModifyDataRepo = (req, connection, callback) => {
        connection.query('UPDATE users SET name = ? WHERE id = ?', [req.body.name, req.body.id], callback, function(error, results, fields) {});
};

const UserDeleteDataRepo = (req, connection, callback) => {
        connection.query('DELETE FROM users WHERE id = ?', req.params.idRow, callback, function(error, results, fields) {});
};

const UserAddDataRepo = (req, connection, callback) => {
        connection.query(`CALL user_create(?)`, req.body.name, callback, function(error, results) {});
};

module.exports = {
    UserGetDataRepo,
    UserModifyDataRepo,
    UserDeleteDataRepo,
    UserAddDataRepo
}