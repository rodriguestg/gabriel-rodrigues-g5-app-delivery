import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemTable from '../components/ItemTable';
import NavBar from '../components/NavBar';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const [path, setPath] = useState('');
  const { location: { pathname } } = useHistory();

  const { id } = useParams();

  useState(() => {
    setPath(pathname.includes('customer') ? 'customer' : 'seller');
  }, []);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(`http://localhost:3001/sales/details/${id}`);

      if (Array.isArray(response)) setOrder(response[0]);
    };

    getOrder();
  }, []);

  return (
    <div>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { order && order.products.map((product, index) => (
            <ItemTable item={ product } path={ pathname } index={ index } key={ index } />
          ))}
        </tbody>
      </table>
      <h2 data-testid={ `${path}_checkout__element-order-total-price` }>
        {total.toFixed(2).replaceAll('.', ',')}
      </h2>
    </div>
  );
}
