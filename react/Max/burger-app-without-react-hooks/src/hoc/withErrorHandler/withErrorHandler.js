import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {             // To wzorzec fabryki klasy
    state = {
      error: null,
    }
    // zastosowałem tu componentWillMount, NIE componentDidMount, bo DidMount jest wywoływany PO renderze dzieci. Czyli DidMount
    // będzie jedynie wywołany w poniższej metodzie render() w <WrappedComponent />
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {   // w instancji axios mogę ustawić globalny interceptor, który pozwala
        this.setState({error: null});                                 // obsłużyć błędy /////////  PODCZAS WYSYŁANIA ZAPYTANIA
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {      ///////// PODCZAS ODBIERANIA ODPOWIEDZI
        this.setState({error: error});
      })
    }

    /**********  DO componentWillUnmount:
     
    Problemem jest to, że jak dodam HOC withErrorHandler do innego komponentu, zostanie ciągle wywoływana metoda
    componentWillMount() (Bo klasa zwracana w tym komponenecie wyższego rzędu jest tworzona za każdym razem, czyli za każdym razem,
    gry wywołam withErrorHandler) 

    W przypadku wielu stron, gdy wiele razy chciałbym użyć tej obsługi błędu, tworzę ten komponent wiele razy. Z tego powodu
    stare interceptory ciągle istnieją. Czyli mam wiele interceptorów istniejących w pamięci, które nie są potrzebne. 

    POWINIENEM WIĘC USUNAĆ INTERCEPTORY, GDY KOMPONENT JEST ROZMONTOWYWANY. componentWillUnmount to metoda, która jest wykonywana
    w czasie, gdy komponent nie jest już potrzebny.

    **********/

    // Ten componentWillMount zapewnia, że gdy nie potrzebuję komponentu BurgerBuilder, to czyszczę interceptory. Więc jeśli ponownie używam
    // withErrorHandling w BurgerBuilder to nie tworzę coraz to więcej interceptorów
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
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