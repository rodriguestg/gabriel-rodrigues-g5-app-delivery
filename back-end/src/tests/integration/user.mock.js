// nome da variável: rotaDaApi_Mock ou Expected

const usersSellers_FindAll = [
       {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller'
      },
      {
        id: 4,
        name: 'Ciclano Pereira',
        email: 'ciclano@email.com',
        password: '98w1dindwuj010wi91w019iw12mdidwe',
        role: 'seller'
      },
  ]

const usersSellers_Expected = [
    {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "password": "3c28d2b0881bf46457a853e0b07531c6",
      "role": "seller"
    },
    {
      "id": 4,
      "name": "Ciclano Pereira",
      "email": "ciclano@email.com",
      "password": "98w1dindwuj010wi91w019iw12mdidwe",
      "role": "seller"
    }
  ]

const users_FindAll = [
    {
      id: 1,
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'administrator'
    },
   {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller'
    },
   {
      id: 3,
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer'
    },
   {
      id: 4,
      name: 'Ciclano Pereira',
      email: 'ciclano@email.com',
      password: '98w1dindwuj010wi91w019iw12mdidwe',
      role: 'seller'
    },
]

const users_Expected = [
  {
    "id": 1,
    "name": "Delivery App Admin",
    "email": "adm@deliveryapp.com",
    "password": "a4c86edecc5aee06eff8fdeda69e0d04",
    "role": "administrator"
  },
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "password": "3c28d2b0881bf46457a853e0b07531c6",
    "role": "seller"
  },
  {
    "id": 3,
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "password": "1c37466c159755ce1fa181bd247cb925",
    "role": "customer"
  },
  {
    "id": 4,
    "name": "Ciclano Pereira",
    "email": "ciclano@email.com",
    "password": "98w1dindwuj010wi91w019iw12mdidwe",
    "role": "seller"
  }
]

module.exports = { usersSellers_FindAll, usersSellers_Expected, users_FindAll, users_Expected }