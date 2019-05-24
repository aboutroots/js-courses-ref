import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button 
          className="Button"
          onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>
            Toggle
        </button>
        <br />
        <Transition 
          in={this.state.showBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit                                 // KOLEJNOŚĆ WYKONYWANIA:
          onEnter={() => console.log('onEnter')}        // tuż przed wejściem w tyb entering
          onEntering={() => console.log('onEntering')}  // po wejściu do trybu entering
          onEntered={() => console.log('onEntered')}    // po wejściu do entered
          onExit={() => console.log('onExit')}          // tuż przed wejściem w tryb exiting
          onExiting={() => console.log('onExiting')}    // gdy jestem w trybie exiting
          onExited={() => console.log('onExited')}      // gdy jestem w trybie exited
          >
          {state => (
            <div style={{
              backgroundColor:'red',
              height: 100,
              width: 100,
              margin:'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1 && state === 'entering' ? 0 : 1,
            }} 
            />
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show/> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;