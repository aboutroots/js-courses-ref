import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            // CSSTransition musze skonfigurować, stąd dodaję klasę i timeout.
            // Co ważne, nie używam tu właściwości in. TransitionGRoup automatycznie ustawia "in" na CSSTransition.
            // Definiuję tylko poniższą klasę fade w stylach.
            <CSSTransition key={index} classNames='fade' timeout={300}>
                <li 
                    className="ListItem" 
                    onClick={() => this.removeItemHandler(index)}>
                    {item}
                </li>
            </CSSTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/* TransitionGroup działa tylko w połączeniu z Transition i CSSTransition,
                dlatego w powyższym <li> też musiałem zmienić */}
                <TransitionGroup 
                    component='ul'
                    className='List'>
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;