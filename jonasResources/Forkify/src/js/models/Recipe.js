import axios from 'axios';
import { proxy, key } from '../config';

export default class Recipe {  // each recipe is identifed by ID
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`); // this axios call here will return a promise
            this.title = res.data.recipe.title; // res is result, where we have data, recipe and title 
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch(error) {
            console.log(error);
            alert('Something went wrong :( Probably a free API request limit has been reached.');
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 igredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        // It says how much servings we have on each of the recipes
        this.servings = 4;
    }

    parseIngredients() {
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'punds'];
    const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitShort, 'kg', 'g'];

        const newIngredients = this.ingredients.map(el => {
            // 1) Uniform units (Create two arrays. The first with units as they appear in ingredients. The second - what we final want)
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {  // current element - unit, and current index - i
                ingredient = ingredient.replace(unit, unitShort[i]);
            });

            // 2) Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3) Parse ingredients into count, unit and ingredient
            // test if there is a unit in the string, and if so, where is located
            const arrIng = ingredient.split(' ');  // convert ingredient into an array
            const unitIndex = arrIng.findIndex( el2 => units.includes(el2)); // finde the index, at which unit is located

            let objIng;
            if (unitIndex > -1) {
                // There is a unit
                const arrCount = arrIng.slice(0, unitIndex);

                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count, // it will automatically create property count, and assign the value to it
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIng[0], 10)) { 
                // There is no unit, but 1st element is a number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }

            } else if (unitIndex === -1) {
                // There is no unit and no number in 1st position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient // as above, it will create property ingredient, and assign the value to it
                }
            }

            return objIng;
        });
        this.ingredients = newIngredients;
    }

    updateServings(type) {
        // Servings
        // this will not update here this.servings, it will simply assign this value to newServings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);  // count will be the old count
        });

        this.servings = newServings;
    }
}

