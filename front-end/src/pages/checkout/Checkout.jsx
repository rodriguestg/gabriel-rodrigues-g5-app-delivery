/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoTrashOutline } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import './checkout.css';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue } = useForm();

  const history = useHistory();

  const calculateTotal = () => {
    let sum = 0;
    products.map((item) => {
      sum += item.quantity * item.price;
      return sum;
    });

    setTotal(sum);
  };

  const fetchData = async () => {
    try {
      const sellersResponse = await axios.get('http://localhost:3001/users/sellers');
      setSellers(sellersResponse.data);
      setValue('seller', sellersResponse.data[0].id);
    } catch (e) {
      console.log(e);
    }

    const productsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    if (productsLocalStorage) {
      const filteredArray = productsLocalStorage
        .filter((product) => product.quantity !== 0);

      setProducts(filteredArray);
    }
    calculateTotal();
    setLoading(false);
  };

  const removeItem = (item) => {
    const filteredArray = products
      .filter((product) => product.id !== item.id);
    setProducts(filteredArray);
    localStorage.setItem('cart', JSON.stringify(filteredArray));

    calculateTotal();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [products]);

  const finishOrder = async ({ address, number, seller }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const saleBody = {
      token: user.token,
      sale: {
        sellerId: seller,
        totalPrice: total,
        deliveryAddress: address,
        deliveryNumber: number,
        saleDate: new Date(),
        status: 'Pendente',
      },
      products: products.map(({ id: productId, quantity }) => ({ productId, quantity })),
    };

    const { data: { id } } = await axios.post('http://localhost:3001/sales', saleBody, { headers: { authorization: user.token } });
    history.push(`/customer/orders/${id}`);
  };

  return (
    <div className="checkout-page-container">
      {
        NavBar()
      }
      <div className="checkout-container">
        <div className="cart-products-container">
          <h5 className="checkout-title">
            Carrinho
          </h5>
          {
            loading ? (
              <div>
                Carregando...
              </div>
            ) : (
              <div className="checkout-cards-container">
                {
                  products.map((item, index) => (
                    <div key={ item.id } className="checkout-card-container">
                      <img
                        src={ item.urlImage }
                        alt={ item.name }
                        className="checkout-item-img"
                      />
                      <div className="checkout-card-info">
                        <h5
                          data-testid={
                            `customer_checkout__element-order-table-name-${index}`
                          }
                        >
                          {item.name}
                        </h5>
                        <div className="checkout-card-values">
                          <h6
                            data-testid={
                              `customer_checkout__element-order-table-quantity-${index}`
                            }
                            className="text-orange"
                          >
                            R$
                            {' '}
                            {item.price.toFixed(2).replaceAll('.', ',')}
                          </h6>
                          <h6>X</h6>
                          <h6
                            data-testid={
                              `customer_checkout__element-order-table-unit-price-${index}`
                            }
                          >
                            {item.quantity}
                          </h6>
                          <h6>=</h6>
                          <h6
                            data-testid={
                              `customer_checkout__element-order-table-sub-total-${index}`
                            }
                            className="text-orange"
                          >
                            R$
                            {' '}
                            {(item.price * item.quantity).toFixed(2).replaceAll('.', ',')}
                          </h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={ () => removeItem(item) }
                        className="trash-icon"
                      >
                        <IoTrashOutline />
                      </button>
                    </div>
                  ))
                }
              </div>
            )
          }
          <h5
            data-testid="customer_checkout__element-order-total-price"
            className="total-value"
          >
            <span>Total</span>
            <span className="text-orange">
              R$
              {' '}
              {total.toFixed(2).replaceAll('.', ',')}
            </span>
          </h5>
        </div>

        <div className="checkout-separator" />

        <div className="details-address-container">
          <h5 className="checkout-title">
            Detalhes e endereço para entrega
          </h5>
          <form onSubmit={ handleSubmit(finishOrder) }>
            <label htmlFor="sellers">
              Vendedor(a)
              <select
                name="sellers"
                id="sellers"
                data-testid="customer_checkout__select-seller"
                className="teste"
                { ...register('seller') }
              >
                {
                  sellers.map(({ name, id }) => (
                    <option key={ id } value={ id }>{name}</option>
                  ))
                }
              </select>
            </label>
            <label htmlFor="address">
              Endereço
              <input
                type="text"
                id="address"
                placeholder="Travessa Terceira, Bairro Muruci"
                data-testid="customer_checkout__input-address"
                { ...register('address') }
              />
            </label>
            <label htmlFor="number">
              Número
              <input
                type="text"
                id="number"
                placeholder="198"
                data-testid="customer_checkout__input-address-number"
                { ...register('number') }
              />
            </label>
            <button
              type="submit"
              data-testid="customer_checkout__button-submit-order"
              className="submit-order-button"
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Checkout;
