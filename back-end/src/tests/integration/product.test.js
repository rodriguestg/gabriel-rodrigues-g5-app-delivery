const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { Product } = require('../../database/models')
const { expectedOutput, findAllMock } = require('./product.mock')

chai.use(chaiHttp)

const { expect } = chai

describe('Testa a rota GET /products', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se retorna todos os produtos com SUCESSO', async () => {
        sinon.stub(Product, 'findAll').resolves(findAllMock)
        chaiHttpResponse = await chai.request(app).get('/products')

        expect(chaiHttpResponse).status(200)
        expect(chaiHttpResponse.body).to.be.deep.equal(expectedOutput)
    })
})