const {express, mysql, connection, router} = require('../configurations/configuration');

const { NonClickController } = require('../controllers/NonClicksController');
const { UserGetData, UserModifyData, UserDeleteData, UserAddData } = require('../controllers/UserController');

connection.connect();

router.get('/getusers', (req, res) => {
    return UserGetData(req, res, connection);
});

router.put('/modifyuser', (req, res) => {
    return UserModifyData(req, res, connection);
});

router.delete('/deleteuser/:idRow', (req, res) => {
    return UserDeleteData(req, res, connection);
});

router.post('/adduser', (req, res) => {
    return UserAddData(req, res, connection);
});

router.put('/modifyclicks', (req, res) => {
    return NonClickController(req, res, connection);
});

module.exports = router;