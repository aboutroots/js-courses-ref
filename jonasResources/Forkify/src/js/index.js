import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, cleanLoader } from './views/base';

/* Global state of the app 
- Search object
- Current recipe object
- Shopping list object
- Liked recipes
*/ 
const state = {};

///////////// SEARCH CONTROLLER ///////////////////

const controlSearch = async () => {
    // 1) Get query from the view
    const query = searchView.getInput();  // we read the input from the input field

    if (query) {
        // 2) New search object (which contains query) and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults(); // we get results from API call, wait until that is done, and...

            // 5) Render result on UI
            cleanLoader();
            searchView.renderResults(state.search.result);  // we render it to the UI with renderResults method.
        } catch(err) {
            alert('Something wrong with the search!');
            cleanLoader();
        }  
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//event handler with event delegation
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

///////////// RECIPE CONTROLLER ////////////////////

const controlRecipe = async () => {
    // Get id from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Hightlight selected search item 
        if (state.search) searchView.highlightSelected(id);

        // Create a new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render the recipe
            cleanLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );
        } catch(err) {
            alert('Error processing recipe!');
        }
    }
};

/*
 window.addEventListener('hashchange', controlRecipe); 
 window.addEventListener('load', controlRecipe);
 Better solution below. It adds the same events listener to the different events.
 */
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

///////////// LIST CONTROLLER //////////////////////////

const controlList = () => {
    // Create a new list, if there is not yet
    if (!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid; // the first - we are trying retrieve id

    // Handle the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleItem(id);

    // Handle the count update
    } else if (e.target.matches('.shopping__count-value')) {
        // read data from interface and then update it in our state
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

///////////// LIKE CONTROLLER //////////////////////////

const controlLike = () => {
    // we start creating a new like object (only, if it's not yet there)
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // User has NOT yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        // Toggle the like button (it has not been liked, it will then become full heart)
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);

    // User HAS liked current recipe
    } else {
        // Remove like from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button (it is liked, it will become the empty heart)
        likesView.toggleLikeBtn(false);

        // Remove like from UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, recipe__btn--add *')) {
        // Add ingredients to shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller 
        controlLike();
    }
});