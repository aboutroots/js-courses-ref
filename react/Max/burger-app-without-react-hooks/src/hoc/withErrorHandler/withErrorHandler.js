import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {             // To wzorzec fabryki klasy
    state = {
      error: null,
    }

    componentDidMount() {
      axios.interceptors.request.use(req => {   // w instancji axios mogę ustawić globalny interceptor, który pozwala
        this.setState({error: null});           // obsłużyć błędy /////////  PODCZAS WYSYŁANIA ZAPYTANIA
        return req;
      })
      axios.interceptors.response.use(res => res, error => {      ///////// PODCZAS ODBIERANIA ODPOWIEDZI
        this.setState({error: error});
      })
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <Aux>
          <Modal 
            show={this.state.error}   // Czyli gdy error nie jest null. Poniższe message to właściwość error zwrócona przez Firebase.
            modalClosed={this.errorConfirmedHandler} >  
            {this.state.error ? this.state.error.message : null}   
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  } 
};

export default withErrorHandler;