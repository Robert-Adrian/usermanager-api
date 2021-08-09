const { NonClickRepo } = require('../model/NonClicksRepo');

const NonClickService = async (user_id, value, connection) => {
       
        try {
           return await NonClickRepo(user_id, value, connection);
        } catch(e) {
            throw new Error(e.message);
        }
};

module.exports = {
    NonClickService
}