const { UserGetDataRepo, UserModifyDataRepo, UserDeleteDataRepo, UserAddDataRepo } = require('../model/UserRepo');

const UserGetDataService = async (req, res, connection) => {
       
        try {
           return await UserGetDataRepo(connection, (error, results) => {
                if (error) {
                    return res.json({
                    status: 'failed',
                    code: 400,
                    data: []
                    });
                } else {
                    return res.json({
                    status: 'success',
                    code: 200,
                    data: results
                    });
                }
           });
        } catch(e) {
            throw new Error(e.message);
        }
};

const UserModifyDataService = async (req, res, connection) => {
       
    try {
       return await UserModifyDataRepo(req, connection, (error, results) => {
            if (error) {
                return res.json({
                status: 'failed',
                code: 400,
                data: []
                });
            } else {
                return res.json({
                status: 'success',
                code: 200,
                data: results
                });
            }
       });
    } catch(e) {
        throw new Error(e.message);
    }
};

const UserDeleteDataService = async (req, res, connection) => {
       
    try {
       return await UserDeleteDataRepo(req, connection, (error, results) => {
            if (error) {
                return res.json({
                status: 'failed',
                code: 400,
                data: []
                });
            } else {
                return res.json({
                status: 'success',
                code: 200,
                data: results
                });
            }
       });
    } catch(e) {
        throw new Error(e.message);
    }
};

const UserAddDataService = async (req, res, connection) => {
       
    try {
       return await UserAddDataRepo(req, connection, (error, results) => {
            if (results[0][0].hasOwnProperty('insertId')) {
                return res.json({
                    status: 'success',
                    code: 200,
                    data: results[0][0]
                });
            } else if (results[0][0].hasOwnProperty('Code')) {
                return res.json({
                    status: 'failed',
                    code: results[0][0]['Code'],
                    data: []
                });
            }
       });
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    UserGetDataService,
    UserModifyDataService,
    UserDeleteDataService,
    UserAddDataService
}