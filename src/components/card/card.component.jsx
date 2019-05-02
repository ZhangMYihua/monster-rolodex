import React from 'react';

import './card.css';

export const Card = ({ name, id, email }) => (
  <div className='card-container'>
    <img
      alt='monsters'
      src={`https://robohash.org/${id}?size=200x200&set=set2`}
    />
    <div className='details'>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  </div>
);
