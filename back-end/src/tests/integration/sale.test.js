const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { Sale, User } = require('../../database/models')
const { expectedOutput, findAllMock, findOneMock } = require('./sale.mock')

chai.use(chaiHttp)

const { expect } = chai

describe('Testa a Rota GET /sales/user/:email', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se retorna todos os pedidos de um Usuário com SUCESSO', async () => {
        sinon.stub(User, 'findOne').resolves(findOneMock)
        sinon.stub(Sale, 'findAll').resolves(findAllMock)
        chaiHttpResponse = await chai.request(app).get(`/sales/user/${'zebirita@email.com'}`)

        expect(chaiHttpResponse).status(200)
        expect(chaiHttpResponse.body).to.be.deep.equal(expectedOutput)
    })

    it('Testa se retorna 400 caso o email não seja passado', async () => {
        chaiHttpResponse = await chai.request(app).get(`/sales/user/${undefined}`)

        expect(chaiHttpResponse).status(400)
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Email not sent'})
    })
})