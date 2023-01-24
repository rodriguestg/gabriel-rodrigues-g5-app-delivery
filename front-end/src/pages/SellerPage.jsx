import React from 'react';
import NavBar from '../components/NavBar';
import SaleCard from '../components/SaleCard';
import fetchUtil from '../utils/fetchUtil';

export default function SellerPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const response = await fetchUtil.fetchWithoutBody('/sales', 'GET');

      if (Array.isArray(response)) setSales(response);
    };

    getSales();
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        { sales.length && sales.map((sale) => <SaleCard sale={ sale } key={ sale.id } />)}

      </main>
    </div>
  );
}
