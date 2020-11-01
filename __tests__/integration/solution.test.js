const supertest = require('supertest');

const app = require('../../src/app');

const SolutionModel = require('../../src/app/models/Solution');

const request = supertest(app);

describe('Solution', () => {
    it('should be able to create solution', async () => {
        const response = await request.post('/solutions').send({
            name: 'solutionName2',
        });

        expect(response.status).toBe(200);
    });

    it('should be able to delete solution', async () => {
        const solution = new SolutionModel({
            name: 'existsSolutionName',
        });

        await solution.save();

        const response = await request.delete(`/solutions/${solution._id}`).send();

        expect(response.status).toBe(200);
    });
});
