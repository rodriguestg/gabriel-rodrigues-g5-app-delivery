const expectedOutput = {
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "token": "eyJhbGciOiJIUzI1NiJ9.Mw.OW7ZXw5IGgg6GVIvvSao2jVyQcDLP2Ld7v9uaYr_b7g",
    "role": "customer"
  }

const findOneMock = {
      id: 3,
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer'
  }

  module.exports = { findOneMock, expectedOutput }