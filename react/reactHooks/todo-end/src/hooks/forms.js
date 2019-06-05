import { useState } from 'react';

export const useFormInput = () => {
  const [ value, setValue ] = useState('');
  const [ validity, setValidity ] = useState(false);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    if (event.target.value === '') {
      setValidity(false);
    } else {
      setValidity(true);
    }
  }

  return { value, onChange: inputChangeHandler, validity };

}