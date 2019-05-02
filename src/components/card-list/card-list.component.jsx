import React from 'react';

import { Card } from '../card/card.component';

import './card-list.css';

export const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster, idx) => (
      <Card
        key={idx}
        name={monster.name}
        id={monster.id}
        email={monster.email}
      />
    ))}
  </div>
);
