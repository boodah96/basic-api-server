'use strict';
const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);
let id;
describe('api server', () => {
    it('should be able to create a food on POST /food', async() => {
        const response = await request.post('/api/v1/food').send({
            name: 'mansaf',
            fav: 'yes',
        });
        expect(response.body.data.name).toEqual('mansaf');
        id = response.body.id;
    });
    it('should be able to update a food on PUT /food', async() => {
        const response = await request.put(`/api/v1/food/${id}`).send({
            name: 'mansaf',
            fav: 'yes',
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('mansaf');
    });
    it('should be able to get a food on Get /food/:id', async() => {
        const response = await request.get(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('mansaf');
    });
});