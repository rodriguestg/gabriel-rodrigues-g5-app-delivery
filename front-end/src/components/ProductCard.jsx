import { useContext } from 'react';
import productContext from '../context/productContext';

function ProductCard() {
  const { products, increaseQuantity, decreaseQuantity, cart,
    changeQuantity } = useContext(productContext);

  return (
    <div className="box-products">
      {
        products.length ? products.map((product) => (
          <div
            key={ product.id }
            className="box-card-products"
          >
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.urlImage }
              alt="imagem de um produto"
              srcSet=""
              width={ 100 }
              className="img-product"
            />
            <div className="box-title">
              <p
                data-testid={ `customer_products__element-card-title-${product.id}` }
                className="title-product"
              >
                {product.name}
              </p>
            </div>
            <p
              data-testid={ `customer_products__element-card-price-${product.id}` }
              className="price-product"
            >
              {`R$${Number(product.price).toFixed(2).replace('.', ',')}`}
            </p>
            <div className="box-btn-add-remove-products">
              <button
                data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                type="button"
                onClick={ () => decreaseQuantity(product.id) }
                className="btn-add-remove"
              >
                -
              </button>
              <input
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
                type="number"
                value={ cart.find((c) => c.id === product.id)
                  ? cart.find((c) => c.id === product.id).quantity : '' }
                onChange={ ({ target }) => changeQuantity(product.id, target.value) }
                placeholder="0"
                className="inp-value-products"
              />
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${product.id}` }
                onClick={ () => increaseQuantity(product.id) }
                className="btn-add-remove"
              >
                +
              </button>
            </div>
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
