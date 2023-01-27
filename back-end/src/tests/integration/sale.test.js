const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app =  require('../../api/app')
const mocha = require('mocha')
const { Sale, User, SaleProduct } = require('../../database/models')
const jwt = require('jsonwebtoken')
const { salesUserEmail_FindOne, salesUserEmail_FindAll, salesUserEmail_Expected , salesDetailsSaleId_FindOne, 
    salesDetailsSaleId_Expected, sales_FindAll, sales_Expected, sales_Create, sales_Update, 
    sales_Expected2  } = require('./sale.mock')

chai.use(chaiHttp)

const { expect } = chai

describe('Testa a Rota GET /sales/user/:email', () => {
    afterEach(sinon.restore)
    let chaiHttpResponse;

    it('Testa se retorna todos os pedidos de um Usuário com SUCESSO', async () => {
        sinon.stub(User, 'findOne').resolves(salesUserEmail_FindOne)
        sinon.stub(Sale, 'findAll').resolves(salesUserEmail_FindAll)
        chaiHttpResponse = await chai.request(app).get(`/sales/user/${'zebirita@email.com'}`)

        expect(chaiHttpResponse).status(200)
        expect(chaiHttpResponse.body).to.be.deep.equal(salesUserEmail_Expected)
    })

    it('Testa se retorna 400 caso o email não seja passado', async () => {
        chaiHttpResponse = await chai.request(app).get(`/sales/user/${undefined}`)

        expect(chaiHttpResponse).status(400)
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Email not sent'})
    })

    describe('Testa a Rota GET /sales/details/:saleId', () => {
        afterEach(sinon.restore)
        it('Testa se retorna a venda por Id com SUCESSO', async () => {
            sinon.stub(Sale, 'findOne').resolves(salesDetailsSaleId_FindOne)
            chaiHttpResponse = await chai.request(app).get(`/sales/details/${1}`)

            expect(chaiHttpResponse).status(200)
            expect(chaiHttpResponse.body).to.be.deep.equal(salesDetailsSaleId_Expected)
        })
    })

    describe('Testa a Rota GET /sales', () => {
        it('Testa se torna todos os pedidos do Vendedor com SUCESSO', async () => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.MQ.4lwf4bp8So6V6exIb8i_y2u_QtTH5eRdQvtV2DcImF8'
            sinon.stub(Sale, 'findAll').resolves(sales_FindAll)
            sinon.stub(jwt, 'verify').resolves(1)
            chaiHttpResponse = await chai.request(app).get('/sales')
            .set('Authorization', token)

            expect(chaiHttpResponse).status(200)
            expect(chaiHttpResponse.body).to.be.deep.equal(sales_Expected)
        })
    })

    describe('Testa a Rota POST /sales', () => {
        it('Testa se cria uma venda com SUCESSO', async () => {
            const input = {
                "token": "eyJhbGciOiJIUzI1NiJ9.Mw.OW7ZXw5IGgg6GVIvvSao2jVyQcDLP2Ld7v9uaYr_b7g",
                "sale": {
                "sellerId": 2,
                "totalPrice": 123.21,
                "deliveryAddress": "Rua tal",
                "deliveryNumber": "001",
                "saleDate": "2023-01-27T21:54:12.520Z",
                "status": "Pendente"
                },
                "products": [ 
                { "productId": 2, "quantity": 10 },
                { "productId": 4, "quantity": 5 },
                { "productId": 10, "quantity": 3 }
                ]
                }
            
            sinon.stub(jwt, 'verify').resolves(3)
            sinon.stub(Sale, 'create').resolves(sales_Create)
            sinon.stub(SaleProduct, 'bulkCreate').resolves()
            chaiHttpResponse = await chai.request(app).post('/sales').send(input)

            expect(chaiHttpResponse).status(201)
            expect(chaiHttpResponse.body).to.be.deep.equal({ "id": 5 })
        })
    })

    describe('Testa a Rota PATCH /sales', () => {
        it('Testa se atualiza uma venda com SUCESSO', async () => {
            sinon.stub(Sale, 'update').resolves(sales_Update)
            chaiHttpResponse = await chai.request(app).patch('/sales').send({
                "id": 1,
                "status": "Preparando"
              })

            expect(chaiHttpResponse).status(200)
            expect(chaiHttpResponse.body).to.be.deep.equal(sales_Expected2)
        })

        it('Testa se retorna 404 caso a venda não seja encontrada', async () => {
            sinon.stub(Sale, 'update').resolves(undefined)
            chaiHttpResponse = await chai.request(app).patch('/sales').send({
                "id": 99999,
                "status": "Preparando"
              })
    
            expect(chaiHttpResponse).status(404)
            expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Sale not found' })
        })
    })
})