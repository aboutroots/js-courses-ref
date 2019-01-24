import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    })
    // this element is not yet in there when we load the page, so I can't do it in base.js
    document.querySelector(`.results__link[href*="#${id}"]`).classList.add('results__link--active');
}

export const limiteRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`
    }
    return title;
}

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limiteRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

// rendering actual buttons
const renderButtons = (page, numResults, resPerPage ) => {       // We need to know, on which page we are, and also how many pages there
    const pages = Math.ceil(numResults / resPerPage);            // actually are (divide the number of results by the results that are displayed                           
        // pages - how many pages there actually are             // per page).

        // what buttons we want available on each page
    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'next')}
            ${createButton(page, 'prev')}
        `;
    } 
    else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    // And insert this new element into DOM
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);

};

export const renderResults = (recipes, page = 1, resPerPage = 10) => { // How much recipes on page
    const start = (page - 1) * resPerPage;                // when I am on page one, I want to start at zero, and end on number 9.
    const end = page * resPerPage;                        // (becouse the index of array is zero). With that I will select 10 elements. 
    recipes.slice(start, end).forEach(renderRecipe);      // If I were on page number two, then I would like to start with number 10.
    // recipes is an array with 30 recipes

    // Render pagination buttons.
    renderButtons(page, recipes.length, resPerPage);
};