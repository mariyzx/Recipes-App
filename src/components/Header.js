import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import title from '../images/title.png';
import loupe from '../images/loupe.png';
import user from '../images/user.png';

function Header() {
  const history = useHistory();
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const route = location.pathname.substring(1);
  const hifen = '-';
  const favoriteRecipes = 'Favorite recipes';
  const doneRecipes = 'Done recipes';
  // referência: https://bit.ly/3AbLHQ3
  const pageTitle = (route[0].toUpperCase() + route.substring(1)).replace(hifen, ' ');

  function handleClick() {
    setShowSearch(!showSearch);
  }

  return (
    <div>
      <div className="header-foods-drinks">
        <img src={ title } alt="title" width="130px" height="45px" />
        <h1 data-testid="page-title" className="title-page">
          {(pageTitle !== favoriteRecipes && pageTitle !== doneRecipes) && pageTitle}
          {' '}
          {(pageTitle === favoriteRecipes) && 'Favorite Recipes'}
          {(pageTitle === doneRecipes) && 'Done Recipes'}

        </h1>
      </div>
      <div>
        {pageTitle === 'Foods' || pageTitle === 'Drinks' ? (
          <div className="buttons-header">
            <button type="button" onClick={ () => history.push('/profile') }>
              <img src={ user } alt=" " width="28px" data-testid="profile-top-btn" />
            </button>
            <button type="button" onClick={ handleClick }>
              <img src={ loupe } alt=" " width="28px" data-testid="search-top-btn" />
            </button>
          </div>)
          : (
            <div className="button-profile">
              <button
                className="button-prof"
                type="button"
                onClick={ () => history.push('/profile') }
              >
                <img src={ profileIcon } alt=" " data-testid="profile-top-btn" />
              </button>
            </div>
          )}
      </div>
      {showSearch && <SearchBar />}
    </div>
  );
}

export default Header;
