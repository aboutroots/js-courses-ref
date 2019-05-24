import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,  // enter defines the duration that we'll use for adding this element
    exit: 1000,  // exit defines the duration it will use for removing it
};

const modal = (props) => {
    return (
        <CSSTransition 
            mountOnEnter
            unmountOnExit
            in={props.show} 
            timeout={animationTiming}  // w classNames definiuję, jakie klasy mają być dodane do owiniętego elemntu, w zalezności od state w transition
            classNames='fade-slide'    // Zachowuje klasy, jakie były już w elemencie, następnie łączy nowe klasy ze starymi
        >                             
            <div className='Modal'>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>

    );
};

export default modal;