import React from 'react';
import './Card.css';

const Card = ({ name, email, username, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='monsters' src={`https://robohash.org/${id}?set=set2&150x150`} />
      <div>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p className='email'>{email}</p>
      </div>
    </div>
  )
}

export default Card;
