import React from 'react';
import PropTypes from "prop-types";
import './ListItem.css';

const ListItem = ({        
  name,
  description,
  image,
  twitterLink
}) => (
  <li className='listItem__wrapper'>
    <img 
      alt='img' 
      src={image} 
      className='listItem__image' 
    />
    <div>
      <h2 className='listItem__name'>{name}</h2>
      <p className='listItem__description'>{description}</p>
      <button className='listItem__button'>{twitterLink}</button>
    </div>
  </li>
);

ListItem.propTypes = {    // to nie są PropTypes z importu. To propTypes należy do ListItem
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
  description: 'Alternatywny tekst, gdy zabraknie description: text',
}

export default ListItem;