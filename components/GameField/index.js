'use client';
//Hooks
import React, { useState, useEffect } from 'react';
//Style
import styles from './styles.module.scss';
//Components
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';


const GameField = ({pagePath}) => {

  const [cards, setCards] = useState([]);
  const [zIndex, setZIndexState] = useState([]);


//Создание новой карточки
  const handleClick = (event) => {
    if (event.currentTarget === event.target) {
      const containerRect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;
      const uniqueId = uuidv4();
      const newZIndex = Math.max(...zIndex, 0) + 1;
    setCards([...cards, {id:uniqueId, x, y }]);
    // setDlina(dlina+1);
    setZIndexState([...zIndex, newZIndex]);
    // setZIndexState([...zIndex, cards.length]);
    }
  };

  const setZIndex = (index, newZIndex) => {
    setZIndexState((prevZIndex) => {
      const newZIndexState = [...prevZIndex];
      newZIndexState[index] = newZIndex;
      return newZIndexState;
    });
  };



  return (
    <div className={styles.container} onMouseDown={handleClick}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          x={card.x}
          y={card.y}
          index={index}
          zIndex={zIndex}
          setZIndex={setZIndex}
        />
      ))}
    </div>
  );
};

export default GameField;
