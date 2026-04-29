const testConfig = require('../../../config/test-config');
const TestEndPoints = require('../TestEndPoints');
const log = require('../../utils/test-logger');
log.level = testConfig.LOG_LEVEL || 'info';
const {client} = require('../RestClient');

class SwapiRequests {

    static getStarShipById(starShipId) {
        log.info('Getting starship by id');
        return client.get(TestEndPoints.getStarShipByIdEndPoint(starShipId),
            {headers: {Custom: 'Hello world!'}}
        );
    }
}

module.exports = SwapiRequests;
