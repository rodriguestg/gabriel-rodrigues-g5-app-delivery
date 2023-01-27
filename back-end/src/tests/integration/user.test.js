const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { User } = require('../../database/models')
const jwt = require('jsonwebtoken')
const { usersSellers_FindAll, usersSellers_Expected, users_Expected, users_FindAll } = require('./user.mock')

chai.use(chaiHttp)

const { expect } = chai

describe('Testa a Rota GET /users/sellers', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se retorna todos os Vendedores com SUCESSO' , async () => {
        sinon.stub(User, 'findAll').resolves(usersSellers_FindAll)
        chaiHttpResponse = await chai.request(app).get('/users/sellers')

        expect(chaiHttpResponse).status(200)
        expect(chaiHttpResponse.body).to.be.deep.equal(usersSellers_Expected)
    })

    describe('Testa a Rota GET /users', () => {
        it('Testa se retorna todos os Usuários', async () => {
            sinon.stub(User, 'findAll').resolves(users_FindAll)
            chaiHttpResponse = await chai.request(app).get('/users')

            expect(chaiHttpResponse).status(200)
            expect(chaiHttpResponse.body).to.be.deep.equal(users_Expected)
        })
    })
})