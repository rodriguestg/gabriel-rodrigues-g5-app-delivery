import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import fetchUtil from '../utils/fetchUtil';

export default function SellerPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const response = await fetchUtil.fetchWithoutBody('/sales/1', 'GET');

      if (Array.isArray(response)) setSales(response);
    };

    getSales();
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        { sales.length
         && sales.map((sale) => <OrderCard sale={ sale } key={ sale.id } />)}

      </main>
    </div>
  );
}
