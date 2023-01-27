const findOneMock = {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer'
  }

const findAllMock = [ 
    {
        id: 1,
        userId: 3,
        sellerId: 1,
        totalPrice: '50.00',
        deliveryAddress: 'Rua Tal',
        deliveryNumber: '000',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
     {
        id: 2,
        userId: 3,
        sellerId: 1,
        totalPrice: '25.00',
        deliveryAddress: 'Rua Tal',
        deliveryNumber: '001',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
     {
        id: 3,
        userId: 3,
        sellerId: 1,
        totalPrice: '100.00',
        deliveryAddress: 'Rua Tal',
        deliveryNumber: '002',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
  ]

const expectedOutput = [
    {
      "id": 1,
      "userId": 3,
      "sellerId": 1,
      "totalPrice": "50.00",
      "deliveryAddress": "Rua Tal",
      "deliveryNumber": "000",
      "saleDate": "2023-01-01T00:00:00.000Z",
      "status": "pending",
      "seller_id": 1
    },
    {
      "id": 2,
      "userId": 3,
      "sellerId": 1,
      "totalPrice": "25.00",
      "deliveryAddress": "Rua Tal",
      "deliveryNumber": "001",
      "saleDate": "2023-01-01T00:00:00.000Z",
      "status": "pending",
      "seller_id": 1
    },
    {
      "id": 3,
      "userId": 3,
      "sellerId": 1,
      "totalPrice": "100.00",
      "deliveryAddress": "Rua Tal",
      "deliveryNumber": "002",
      "saleDate": "2023-01-01T00:00:00.000Z",
      "status": "pending",
      "seller_id": 1
    }
  ]

module.exports = { findOneMock, findAllMock, expectedOutput }