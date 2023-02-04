import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import OrderCard from '../../components/OrderCard';
import './customerPage.scoped.css';

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
      <div className="orders">
        {
          sales ? sales.map((sale) => (<OrderCard sale={ sale } key={ sale.id } />))
            : <div>Carregando...</div>
        }
      </div>

    </div>
  );
}

export default CustomerPage;
