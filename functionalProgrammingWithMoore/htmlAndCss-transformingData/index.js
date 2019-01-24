const MEALS = [
    { description: 'Breakfast', calories: 460 },
    { description: 'Snack', calories: 180 },
    { description: 'Lunch', calories: 600 },
  ];
  
  const { td, th, tr, tbody, thead, table } = tags;
  
  function cell(tag, className, value) { 
    return tag({className}, value);
  }
  
  function mealRow(className, meal) {
    return tr({ className }, [
      cell(td, 'pa2', meal.description),
      cell(td, 'pa2 tr', meal.calories),
    ]);
  }
  
  function mealsBody(className, meals) {
    const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
    
    const rowsWithTotal = R.append(totalRow(meals), rows);
    return tbody({ className }, rowsWithTotal);
  }
  
  const headerRow = tr([
    cell(th, 'pa2', 'Meal'),
    cell(th, 'pa2', 'Calories')
  ]);
  
  const mealHeader = thead(headerRow);
  
  function totalRow(meals) {
    const total = R.pipe(
      R.map(meal => meal.calories),
      R.reduce((acc, calories) => acc + calories, 0),
      )(meals);
    return tr({className: 'bt b' }, [
      cell(td, 'pa2 tr', 'Total:'),
      cell(td, 'pa2 tr', total)
    ]);
  };
  
  function mealsTable(meals) {
    return table({ className: 'mw5 center w-100 collapse' }, [
      mealHeader,
      mealsBody('', meals),
    ]);
  };
  
  const node = document.getElementById('app');
  
  const view = mealsTable(MEALS);
  
  node.appendChild(view);