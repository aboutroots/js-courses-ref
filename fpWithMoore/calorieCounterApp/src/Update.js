import * as R from 'ramda';

const MSGS = {
    SHOW_FORM: 'SHOW_FORM',
    MEAL_INPUT: 'MEAL_INPUT',
    CALORIES_INPUT: 'CALORIES_INPUT',
    SAVE_MEAL: 'SAVE_MEAL',          // w tym przypadku, nie trzeba funkcji a zmienną, ponieważ nie mam tu ładunku w ciele wiadomosci
    DELETE_MEAL: 'DELETE_MEAL',         
    EDIT_MEAL: 'EDIT_MEAL',
};

export function mealInputMsg(description) {
    return {
        type: MSGS.MEAL_INPUT,
        description,
    };
};

export function caloriesInputMsg(calories) {
    return {
        type: MSGS.CALORIES_INPUT,
        calories,
    };
};

export const saveMealMsg = { type: MSGS.SAVE_MEAL };

export function deleteMealMsg(id) {
    return {
        type: MSGS.DELETE_MEAL,
        id,
    };
};

export function editMealMsg(editId){
    return {
        type: MSGS.EDIT_MEAL,
        editId
    };
};

function update(msg, model) {
    switch(msg.type) {
        case MSGS.SHOW_FORM: {
            const { showForm } = msg;
            return { ...model, showForm, description: '', calories: 0 }; // użuwam operatora spread, by włączyć bieżące właściwości
        }                                                                // modelu do tego obiektu
        case MSGS.MEAL_INPUT: {
            const { description } = msg;
            return { ...model, description };
        }
        case MSGS.CALORIES_INPUT: {
            const calories = R.pipe(
                parseInt,                   // jeśli przekazana wartość do parseInt będzie niewłaściwa, zostanie zwrócone NaN
                R.defaultTo(0),             // by temu zapobiec, korzystam z defaulTo
            )(msg.calories);
            return { ...model, calories };
        }
        case MSGS.SAVE_MEAL: {                    
            const { editId } = model;                 // tu sprawdzam, czy aplikacja jest w 'edit mode' czy 'add mode'
            const updatedModel = editId !== null ?    // dzięki editId w modelu
            edit(msg, model) : 
            add(msg, model);
            return updatedModel;
        }
        case MSGS.DELETE_MEAL: {
            const { id } = msg;
            const meals = R.filter(
                meal => meal.id !== id,  // meal.id nie jest równe id posiłkowi, który chcę usunąć. 
                model.meals);            // czyli znajduję tu to, co chcę usunąć
            return { ...model, meals };
        }
        case MSGS.EDIT_MEAL: {              // PRZED EDYCJĄ, ALE PO KLIKNIĘCIU NA IKONĘ EDYTUJ
            const { editId } = msg;
            const meal = R.find(
                meal => meal.id === editId, // funkcja jako pierwszy parametr funkcji Ramda. Jeśli zwróci true, meal zostanie
                model.meals);               // zwrócony przez find. Jeśli false, wtedy wywołuje tą funkcję na kolejnym elemencie tablicy
            const { description, calories } = meal;   // gdy już znalazłem meal do edytcji, wypakowuję te właściwości z meal
            return {
                ...model,
                editId,
                description,
                calories,
                showForm: true,
            };
        }
    };
    return model;
};

function add(msg, model) {
    const { nextId, description, calories } = model;
    const meal = { id: nextId, description, calories };
    const meals = [ ...model.meals, meal ];
    return {
        ...model,
        meals,
        nextId: nextId + 1,
        description: '',
        calories: 0,
        showForm: false,
    };
};

export function showFormMsg(showForm) {               // zmieniam tu typ wiadomości przesyłanej w aplikacji
    return {                                          // z stringu "SHOW_FORM: 'SHOW_FORM'" na obiekt, gdzie typem właściwości
        type: MSGS.SHOW_FORM,                         // jest string. Teraz mam dodatkową informację w wiadomości. Tutaj
        showForm,                                     // dodatkową wiadomością jest showForm, czyli wartość boolean
    };                                                // Dzięki takim funkcjom, widać wyraźnie ładunek wiadomości
};

function edit(msg, model) {                           // CO MA SIĘ STAĆ, PO EDYCJI
    const { description, calories, editId } = model;
    const meals = R.map(meal => {
        if (meal.id === editId) {
            return { ...meal, description, calories };
        }
        return meal;
    }, model.meals);
    return {
        ...model,
        meals,
        description: '',
        calories: 0,
        showForm: false,
        editId: null,
    };
};

export default update;
