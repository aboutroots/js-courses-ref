import React from 'react';
                 // WAŻNE: shallow renderuje komponent z całą zawartością, lecz nie renderuje tego co zagnieżdżone. 
                 // Czyli NavigationItem renderowane jest jako placeholer, bez jego zawartości.
import { configure, shallow } from 'enzyme';    // Dzięki shallow Enzyme pozwala wyrenderować tylko <NavigationItems />, niezależnie od reszty aplikacji.
import Adapter from 'enzyme-adapter-react-16';  // Umożliwia połączyć Enzyme z aktualną wersją react'a.

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()}); // dzięki temu Enzyme jest połączony

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);              // W shallow mam JSX, więc importuję React. Czyli tu renderuje płytko ten komponent i
  });

  it('should render two <NavigationItem /> elements if not authenticated', () => {         
    expect(wrapper.find(NavigationItem)).toHaveLength(2); // teraz mogę zajrzeć do tego komponentu i oczekuję znaleźć NavigationItem dwa razy.
  });
  it('should render three <NavigationItem /> elements if authenticated', () => {   
    // wrapper = shallow(<NavigationItems isAuthenticated />); to jedno wyjście, oraz z metodą setProps:
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3); 
  });
  it('should an exact logout button', () => {   
    wrapper.setProps({isAuthenticated: true});       // muszę to umieścić ponownie, bo KAŻDY TEST uruchamiany jest niezależnie od pozostałych
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
});