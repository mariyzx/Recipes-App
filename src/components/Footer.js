import React from 'react';
import { useHistory } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import poinsettia from '../images/poinsettia.png';

function Footer() {
  const history = useHistory();

  return (
    <div data-testid="footer" className="footer">
      {/* tutorial img em React: https://daveceddia.com/react-image-tag/ */}
      <button
        type="button"
        onClick={ () => { history.push('/drinks'); } }
      >
        <img src={ poinsettia } width="40px" alt=" " data-testid="drinks-bottom-btn" />
      </button>

      <button
        type="button"
        onClick={ () => { history.push('/foods'); } }
      >
        <img src={ mealIcon } alt=" " data-testid="food-bottom-btn" />
      </button>
    </div>
  );
}

export default Footer;
