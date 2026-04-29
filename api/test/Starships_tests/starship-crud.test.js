let res;

describe('Starship CRUD operations', () => {
    before(() => {
        log.info('I am called once before all specs in this file');
    });

    beforeEach(() => {
        log.info('I am called before each spec in this file');
    });

    it('Should get a random existing starship by id', async() => {
        const randomStartShipId = RequestDataGenerator.generateStarshipId();
        res = await SwapiRequests.getStarShipById(randomStartShipId);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name');
    });

    it('Should not return a starship with non existing id', async() => {
        res = await SwapiRequests.getStarShipById(1000000);
        expect(res).to.have.status(404);
        expect(res.body.detail).to.equal('Not found');
    });

    afterEach(() => {
        log.info('I am called after each spec in this file');
    });

    after(() => {
        log.info('I am called once after all specs in this file');
    });
});
