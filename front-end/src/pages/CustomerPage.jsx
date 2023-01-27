import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function CustomerPage() {
  const [sales, setSales] = useState([]);

  const fetchSale = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get(`http://localhost:3001/sales/user/${email}`);
    setSales(response.data);
  };

  useEffect(() => {
    fetchSale();
  }, []);

  return (
    <div>
      <NavBar />
      {
        sales ? sales.map((sale) => (<OrderCard sale={ sale } key={ sale.id } />))
          : <div>Carregando...</div>
      }

    </div>
  );
}

export default CustomerPage;
