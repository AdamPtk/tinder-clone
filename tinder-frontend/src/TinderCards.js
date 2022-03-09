import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeolpe] = useState([
    {
      name: 'Elon Musk',
      url: 'https://www.vogue.pl/uploads/repository/elon-gl.jpg',
    },
    {
      name: 'Jeff Bezos',
      url: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&fit=crop',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = name => {
    console.log(name + " left the screen");
  };

  return (
    <div className='tinderCards'>
      <div className="tinderCards_cardContainer">
        {people.map(person => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={dir => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div 
              className="card"
              style={{backgroundImage: `url("${person.url}")`}}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards