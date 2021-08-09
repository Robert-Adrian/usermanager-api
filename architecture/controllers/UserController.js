
const { UserGetDataService, UserModifyDataService, UserDeleteDataService, UserAddDataService } = require('../services/UserService');

const UserGetData = async (req, res, connection) => {
    res.setHeader('Content-Type', 'application/json');
    try {
   
        return await UserGetDataService(req, res, connection);
       
    } catch(e) {
        res.sendStatus(500);
    }
};

const UserModifyData = async (req, res, connection) => {
    res.setHeader('Content-Type', 'application/json');
    try {
   
        return await UserModifyDataService(req, res, connection);
       
    } catch(e) {
        res.sendStatus(500);
    }
};

const UserDeleteData = async (req, res, connection) => {
    res.setHeader('Content-Type', 'application/json');
    try {
   
        return await UserDeleteDataService(req, res, connection);
   
    } catch(e) {
        res.sendStatus(500);
    }
};

const UserAddData = async (req, res, connection) => {
    res.setHeader('Content-Type', 'application/json');
    try {
   
        return await UserAddDataService(req, res, connection);
   
    } catch(e) {
        res.sendStatus(500);
    }
};

module.exports = {
    UserGetData,
    UserModifyData,
    UserDeleteData,
    UserAddData
}