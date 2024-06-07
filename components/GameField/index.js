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

      const sizeBlock = Math.max(containerRect.width * 0.05, 30);//размеры карточки (только ширина, потому что квадрат)
      
      //координаты нажатия
      let x = event.clientX - containerRect.left;
      let y = event.clientY - containerRect.top;
      
      //если карточка выходит за игровое поле сместить её, чтобы поместилась
      if (containerRect.height - y < sizeBlock) {
        y = containerRect.height - sizeBlock;
      }

      if (containerRect.width - x < sizeBlock) {
        x = containerRect.width - sizeBlock;
      }

      const uniqueId = uuidv4();
      console.log(containerRect);

      const newZIndex = Math.max(...zIndex, 0) + 1;
    setCards([...cards, {id:uniqueId, x, y }]);
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
