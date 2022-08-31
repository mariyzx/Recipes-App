import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import '../styles/Foods.css';

function Foods() {
  const { foods, foodCategory,
    handleFood, resetFoodsFilter } = useContext(Context);
  const num12 = 12;
  const num5 = 5;
  return (
    <div className="div-foods-drinks">
      <Header />
      <div className="category">
        { foodCategory.meals
        && foodCategory.meals.slice(0, num5).map((category, id) => (
          <button
            key={ id }
            data-testid={ `${category.strCategory}-category-filter` }
            type="button"
            onClick={ () => { handleFood(category.strCategory); } }
          >
            {category.strCategory}

          </button>
        ))}
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ resetFoodsFilter }
        >
          All
        </button>
      </div>
      <div className="foods-drinks">
        { foods.meals
          && foods.meals.slice(0, num12).map((food, index) => (
            <Link to={ `/foods/${food.idMeal}` } key={ index }>
              <div data-testid={ `${index}-recipe-card` } className="card-food-drinks">
                <h5 data-testid={ `${index}-card-name` }>{food.strMeal}</h5>
                <img
                  width="250px"
                  className="img-food-drinks"
                  src={ food.strMealThumb }
                  alt=""
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
