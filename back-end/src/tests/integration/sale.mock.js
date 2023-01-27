// nome de variável: rotaDaApi_Mock ou Expected

const salesUserEmail_FindOne = {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer'
  }

  const salesUserEmail_FindAll = [ 
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

const salesUserEmail_Expected = [
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

const salesDetailsSaleId_FindOne = {
    id: 1,
    userId: 3,
    sellerId: 1,
    totalPrice: '100.00',
    deliveryAddress: 'Rua Tal',
    deliveryNumber: '23',
    saleDate: '2023-01-01T00:00:00.000Z',
    status: 'pending',
    seller_id: 1,
    products: [],
    users: {
      id: 3,
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer'
    },
    seller: {
      id: 1,
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'administrator'
    },
  };

const salesDetailsSaleId_Expected = {
    "id": 1,
    "userId": 3,
    "sellerId": 1,
    "totalPrice": "100.00",
    "deliveryAddress": "Rua Tal",
    "deliveryNumber": "23",
    "saleDate": "2023-01-01T00:00:00.000Z",
    "status": "pending",
    "seller_id": 1,
    "products": [],
    "users": {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "password": "1c37466c159755ce1fa181bd247cb925",
      "role": "customer"
    },
    "seller": {
      "id": 1,
      "name": "Delivery App Admin",
      "email": "adm@deliveryapp.com",
      "password": "a4c86edecc5aee06eff8fdeda69e0d04",
      "role": "administrator"
    }
  }

const sales_FindAll = [
     {
        id: 1,
        userId: 3,
        sellerId: 1,
        totalPrice: '100.00',
        deliveryAddress: 'Rua Tal',
        deliveryNumber: '23',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
     {
        id: 2,
        userId: 3,
        sellerId: 1,
        totalPrice: '50.00',
        deliveryAddress: 'Rua Ola Mundo',
        deliveryNumber: '295',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
     {
        id: 3,
        userId: 3,
        sellerId: 1,
        totalPrice: '25.00',
        deliveryAddress: 'Av Tancredo',
        deliveryNumber: '100',
        saleDate: '2023-01-01T00:00:00.000Z',
        status: 'pending',
        seller_id: 1
      },
  ]

const sales_Expected = [
  {
    "id": 1,
    "userId": 3,
    "sellerId": 1,
    "totalPrice": "100.00",
    "deliveryAddress": "Rua Tal",
    "deliveryNumber": "23",
    "saleDate": "2023-01-01T00:00:00.000Z",
    "status": "pending",
    "seller_id": 1
  },
  {
    "id": 2,
    "userId": 3,
    "sellerId": 1,
    "totalPrice": "50.00",
    "deliveryAddress": "Rua Ola Mundo",
    "deliveryNumber": "295",
    "saleDate": "2023-01-01T00:00:00.000Z",
    "status": "pending",
    "seller_id": 1
  },
  {
    "id": 3,
    "userId": 3,
    "sellerId": 1,
    "totalPrice": "25.00",
    "deliveryAddress": "Av Tancredo",
    "deliveryNumber": "100",
    "saleDate": "2023-01-01T00:00:00.000Z",
    "status": "pending",
    "seller_id": 1
  }
]

const sales_Create = {
  id: 5,
  sellerId: 2,
  totalPrice: 123.21,
  deliveryAddress: 'Rua tal',
  deliveryNumber: '001',
  saleDate: '2023-01-27T21:54:12.520Z',
  status: 'Pendente',
  userId: '3'
};

const sales_Update = {
  "affectedRows": [
    1
  ]
}

const sales_Expected2 = {
    "affectedRows": {
      "affectedRows": [
        1
      ]
    }
}

module.exports = { salesUserEmail_FindOne, salesUserEmail_FindAll, salesUserEmail_Expected,
   salesDetailsSaleId_FindOne, salesDetailsSaleId_Expected, sales_FindAll, sales_Expected, 
   sales_Create, sales_Update, sales_Expected2 }