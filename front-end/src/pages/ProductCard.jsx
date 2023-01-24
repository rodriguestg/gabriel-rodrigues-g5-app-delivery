import { useContext } from 'react';
import productContext from '../context/productContext';

function ProductCard() {
  const { products, increaseQuantity, decreaseQuantity, cart,
    changeQuantity } = useContext(productContext);
  return (
    <div>
      {
        products.length ? products.map((product) => (
          <div
            key={ product.id }
          >
            <p data-testid={ `customer_products__element-card-title-${product.id}` }>
              {product.name}
            </p>
            <p data-testid={ `customer_products__element-card-price-${product.id}` }>
              {`R$${Number(product.price).toFixed(2).replace('.', ',')}`}
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.url_image }
              alt="imagem de um produto"
              srcSet=""
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => increaseQuantity(product.id) }
            >
              +
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              value={ cart.find((c) => c.id === product.id)
                ? cart.find((c) => c.id === product.id).quantity : '' }
              onChange={ ({ target }) => changeQuantity(product.id, target.value) }
              placeholder="0"
            />
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              onClick={ () => decreaseQuantity(product.id) }
            >
              -
            </button>
          </div>

        ))
          : (
            <div>
              Carregando...
            </div>
          )
      }
    </div>
  );
}

export default ProductCard;
