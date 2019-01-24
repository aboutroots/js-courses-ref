import { elements } from './base';

// Two small methods in here - one to render the item and one to delete item from UI

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);  // select the element, that we want to delete based on passed ID
    if (item) item.parentElement.removeChild(item);  // remove stuff from UI
}