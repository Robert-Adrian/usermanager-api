
const NonClickRepo = (user_id, value, connection) => {
    connection.query('UPDATE clicks SET noclicks = ? WHERE user_id = ?', [value, user_id], function(error, results, fields) {
        return [error, results];
    });
};

module.exports = {
    NonClickRepo
}