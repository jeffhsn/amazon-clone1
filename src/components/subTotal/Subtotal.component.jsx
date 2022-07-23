import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../context/reducer';
import './Subtotal.styles.css';

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const handleCheckout = () => {
    if (basket.length === 0) {
      alert('Your basket is empty');
    }
    dispatch({ type: 'EMPTY_BASKET' });
    navigate('/');
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{' '}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
