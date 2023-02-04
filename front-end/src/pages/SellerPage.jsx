import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';
import OrderCard from '../components/OrderCard';

export default function SellerPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await axios.get('http://localhost:3001/sales', { headers: { authorization: token } });

      if (Array.isArray(data)) setSales(data);
    };

    getSales();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="orders">
        { sales.length
         && sales.map((sale) => <OrderCard sale={ sale } key={ sale.id } />)}
      </div>
    </div>
  );
}
