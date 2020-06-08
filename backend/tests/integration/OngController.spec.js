const request = require ('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('List and create ongs on database', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('Create an ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Ongd",
            email: "www@gmail.com.br",
            whatsapp: "31999999999",
            city: "Betim",
            uf: "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })

})