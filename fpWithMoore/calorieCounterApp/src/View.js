import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { showFormMsg } from './Update';

// create <pre> tag
const { pre, div, h1, button, lable, input, form, label } = hh(h);

function fieldSet(labelText, inputValue) {
    return div([
        label({ className: 'db mb1' }, labelText),
        input({ 
            className: 'pa2 input-reset, ba 2-100 mb2',
            type: 'text',
            value: inputValue,
        }),
    ]);
};

function buttonSet(dispatch) {
    return div([
        button(
            {
                className: 'fp3 pv2 ph3 bg-blue white bn mr2 dim',
                type: 'submit',
            },
            'Save',
        ),
        button(
            {
                className: 'f3 pv2 bn gb-light-grey dim',
                type: 'button',
                onclick: () => dispatch(showFormMsg(false)),
            },
            'Cancel',
        ),
    ])
}

function formView(dispatch, model) {
    const { description, calories, showForm } = model;
    if (showForm) {
        return form(
            { className: 'w-100 mv2', },
            [
                fieldSet('Meal', description),
                fieldSet('Calories', calories || ''),
                buttonSet(dispatch),
            ],
        );
    }
    return button(
        { 
            className: 'f3 pv2 ph3 bg-blue white bn',
            onclick: () => dispatch(showFormMsg(true)),
        },
        'Add Meal',
    );
    
};

function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Calorie counter'),
        formView(dispatch, model),
        pre(JSON.stringify(model, null, 2)),
    ]);
};

export default view;