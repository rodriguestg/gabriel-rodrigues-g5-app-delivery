const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { User } = require('../../database/models')
const { createMock, expectedOutput } = require('./register.mock')

chai.use(chaiHttp)

const { expect } = chai


describe('Testa a Rota POST /register', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se registra um novo Usuário com SUCESSO', async () => {
        sinon.stub(User, 'create').resolves(createMock)
        chaiHttpResponse = await chai.request(app).post('/register').send({
            name: "user user user",
            email: "user@gmail.com",
            password: 12345678,
            role: "customer"
        })

        expect(chaiHttpResponse).status(201);
        expect(chaiHttpResponse.body).to.be.deep.equal(expectedOutput)
    })
})