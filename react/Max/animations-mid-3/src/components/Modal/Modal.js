import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,  // enter defines the duration that we'll use for adding this element
    exit: 1000,  // exit defines the duration it will use for removing it
};

const modal = (props) => {
    return (
        <Transition 
          mountOnEnter
          unmountOnExit
          in={props.show} 
          timeout={animationTiming}
        >
            {state => {
                const cssClasses = [
                    'Modal',
                    state === 'entering'
                    ? 'ModalOpen'
                    : state === 'exiting' ? 'ModalClosed' : null
                ];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>

    );
};

export default modal;