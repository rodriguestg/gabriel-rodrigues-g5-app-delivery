const deliveryAddress = 'Xavier Alameda';

const mockGetSalesOne = [{
  id: 1,
  userId: 2,
  sellerId: 63.14,
  totalPrice: '609',
  deliveryAddress,
  deliveryNumber: '609',
  saleDate: '2023-01-26 22:54:38',
  status: 'Pendente',
}];

const mockOneSalePendente = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '63.14',
  deliveryAddress,
  deliveryNumber: '609',
  saleDate: '2023-01-26T22:54:38.000Z',
  status: 'Pendente',
  seller_id: 2,
  products: [
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 2,
        quantity: 3,
      },
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 4,
        quantity: 3,
      },
    },
  ],
  users: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
};

const mockOneSalePreparando = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '63.14',
  deliveryAddress,
  deliveryNumber: '609',
  saleDate: '2023-01-26T22:54:38.000Z',
  status: 'Preparando',
  seller_id: 2,
  products: [
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 2,
        quantity: 3,
      },
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 4,
        quantity: 3,
      },
    },
  ],
  users: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
};

const mockOneSaleEmTrânsito = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '63.14',
  deliveryAddress,
  deliveryNumber: '609',
  saleDate: '2023-01-26T22:54:38.000Z',
  status: 'Em Trânsito',
  seller_id: 2,
  products: [
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 2,
        quantity: 3,
      },
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
      SaleProduct: {
        saleId: 1,
        productId: 4,
        quantity: 3,
      },
    },
  ],
  users: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
};

export default { mockGetSalesOne,
  mockOneSalePendente,
  mockOneSalePreparando,
  mockOneSaleEmTrânsito };
