import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients  = Object.keys(props.ingredients)  // to transformuje obiekt z parami klucz-wartość, w tablicę 
    .map(igKey => {                                               // składników burgera, gdzie na podstawie wartości obiektu decyduje            
      return [...Array(props.ingredients[igKey])].map((_, i) => { // jak wiele składników potrzebuję. Klucz potrzebny by wiedzieć, jakiego
        return <BurgerIngredient key={igKey + i} type={igKey} />  // typu składników potrzebuję
      });
    })
    .reduce((err, el) => {
      return err.concat(el)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;