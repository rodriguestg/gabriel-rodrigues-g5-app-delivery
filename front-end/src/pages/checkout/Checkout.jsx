/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar';
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
    <div>
      {
        NavBar()
      }
      <div className="checkout-container">
        <div className="cart-products-container">
          <h3>
            Carrinho
          </h3>
          {
            loading ? (
              <div>
                Carregando...
              </div>
            ) : (
              <div>
                {
                  products.map((item, index) => (
                    <section key={ item.id }>
                      <img
                        src={ item.urlImage }
                        alt="imagem de um produto"
                        srcSet=""
                        width={ 100 }
                      />
                      <div
                        data-testid={
                          `customer_checkout__element-order-table-name-${index}`
                        }
                      >
                        {item.name}
                      </div>
                      <div
                        data-testid={
                          `customer_checkout__element-order-table-quantity-${index}`
                        }
                      >
                        {item.quantity}
                      </div>
                      <div
                        data-testid={
                          `customer_checkout__element-order-table-unit-price-${index}`
                        }
                      >
                        {item.price.toFixed(2).replaceAll('.', ',')}
                      </div>
                      <div
                        data-testid={
                          `customer_checkout__element-order-table-sub-total-${index}`
                        }
                      >
                        {(item.price * item.quantity).toFixed(2).replaceAll('.', ',')}
                      </div>
                      <div
                        data-testid={
                          `customer_checkout__element-order-table-remove-${index}`
                        }
                      >
                        <button
                          type="button"
                          onClick={ () => removeItem(item) }
                        >
                          Remover
                        </button>
                      </div>
                    </section>
                  ))
                }
              </div>
            )
          }
          <h2 data-testid="customer_checkout__element-order-total-price">
            {total.toFixed(2).replaceAll('.', ',')}
          </h2>
        </div>

        <div className="separator-line" />

        <div className="details-address-container">
          <h5 className="details-address-title">
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
