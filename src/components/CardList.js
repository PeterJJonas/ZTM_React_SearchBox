import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
  return (
    <>
    {
      monsters.map((user, index) => {
        return (
          <Card
            key={monsters[index].id}
            id={monsters[index].id}
            name={monsters[index].name}
            username={monsters[index].username}
            email={monsters[index].email}
          />
        );
      })
    }
    </>
  )
}

export default CardList;
