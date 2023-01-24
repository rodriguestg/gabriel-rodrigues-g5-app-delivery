import React from 'react';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

export default function SellerPage() {
  return (
    <div>
      <NavBar />
      <main>
        <OrderCard />
      </main>
    </div>
  );
}
