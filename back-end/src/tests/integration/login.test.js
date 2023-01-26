const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { User } = require('../../database/models')
const jwt = require('jsonwebtoken')
const { findOneMock, expectedLoginResult } = require('./login.mock')

chai.use(chaiHttp)

const { expect } = chai

describe('Testa a Rota POST /login', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se faz login com SUCESSO', async () => {
        sinon.stub(User, 'findOne').resolves(findOneMock)
        chaiHttpResponse = await chai.request(app).post('/login').send({
            email: 'zebirita@email.com',
            password: '$#zebirita#$'
        })
        expect(chaiHttpResponse).status(200)
        expect(chaiHttpResponse.body).to.be.deep.equal(expectedLoginResult)
    })

    it('Testa retorna 404 caso o email não seja passado', async () => {
        chaiHttpResponse = await chai.request(app).post('/login').send({
            password: '$#zebirita#$'
        })
        expect(chaiHttpResponse).status(404)
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Not found'})
    })

    it('Testa retorna 404 caso a senha esteja errada', async () => {
        sinon.stub(User, 'findOne').resolves(findOneMock)
        chaiHttpResponse = await chai.request(app).post('/login').send({
            password: '$#zebirita#$',
            password: 'XXXXXXXXXX',
        })
        expect(chaiHttpResponse).status(404)
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Not found'})
    })

    it('Testa retorna 404 caso o email não exista', async () => {
        sinon.stub(User, 'findOne').resolves(undefined)
        chaiHttpResponse = await chai.request(app).post('/login').send({
            email: 'test@test.com',
            password: '12345678',
        })
        expect(chaiHttpResponse).status(404)
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Not found'})
    })


    describe('Testa a Rota POST /login/token', () => {
        it('Testa se valida o token com SUCESSO', async () => {
            sinon.stub(jwt, 'verify').resolves({ "message": "ola mundo" })
            chaiHttpResponse = await chai.request(app).post('/login/token').send({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoib2xhIG11bmRvIn0.F4R7UJmpdeMfCG8oeErWhTgllVBCwbQVOLy9ih0RP70'
            })
            expect(chaiHttpResponse).status(200)
            expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Valid Token' })
        })

        it('Testa se retorna 403 com token Invalido', async () => {
            sinon.stub(jwt, 'verify').throwsException()
            chaiHttpResponse = await chai.request(app).post('/login/token').send({
                token: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
            })
            expect(chaiHttpResponse).status(403)
            expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Invalid Token' })
        }) 
    })

    
})