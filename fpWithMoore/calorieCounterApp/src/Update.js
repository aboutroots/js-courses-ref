const MSGS = {
    SHOW_FORM: 'SHOW_FORM'
};

function update(msg, model) {
    switch(msg.type) {
        case MSGS.SHOW_FORM: {
            const { showForm } = msg;
            return { ...model, showForm, description: '', calories: 0 };
        }
    }
    return model;
};

export function showFormMsg(showForm) {
    return {
        type: MSGS.SHOW_FORM,
        showForm,
    };
};

export default update;