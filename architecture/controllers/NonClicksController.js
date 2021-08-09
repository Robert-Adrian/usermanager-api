
const { NonClickService } = require('../services/NonClicksService');

const NonClickController = async (req, res, connection) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        await NonClickService(req.body.id, req.body.nonClicks, connection);
        res.sendStatus(200);   
    } catch(e) {
        res.sendStatus(500)
    }
};

module.exports = {
    NonClickController
}