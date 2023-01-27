const createMock = {
      id: 6,
      name: 'user user user',
      email: 'user@gmail.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      role: 'customer'
    };

const expectedOutput = {
    "token": "eyJhbGciOiJIUzI1NiJ9.dXNlckBnbWFpbC5jb20.wT3NODNjN1zHissIpxvoCorqVznTuEyGi4pb50DS5Bw"
  }

  module.exports = { createMock, expectedOutput }