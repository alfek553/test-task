'use client';
//Hooks
import React, { useState, useEffect, useRef } from 'react';
//Style
import styles from './styles.module.scss';
//Components
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

/**
 * Компонент `GameField` отображает игровое поле
 */
const GameField = () => {

  const [cards, setCards] = useState([]);
  const [zIndex, setZIndexState] = useState([]);
  const containerRef = useRef(null);
  
    //Создание новой карточки
    const handleClick = (event) => {
      if (event.currentTarget === event.target) {
        const containerRect = event.currentTarget.getBoundingClientRect();
        
        const sizeBlock = Math.max(containerRect.width * 0.05, 30);//размеры карточки (квадрат)
        
      //координаты нажатия ( - sizeBlock/2 чтобы клик был на середине )
      let x= (event.clientX - containerRect.left) -(sizeBlock/2);
      let y = (event.clientY - containerRect.top)-(sizeBlock/2);

      //если карточка выходит за игровое поле сместить её, чтобы поместилась
      if (containerRect.height - y < sizeBlock) {
        y = containerRect.height - sizeBlock;
      }
      if (y < 0) {
        y = 0;
      }
      if (x < 0) {
        x = 0;
      }

      if (containerRect.width - x < sizeBlock) {
        x = containerRect.width - sizeBlock;
      }

      const uniqueId = uuidv4();
      const newZIndex = Math.max(...zIndex, 0) + 1;
    setCards([...cards, {id:uniqueId, x, y,sizeBlock, }]);
    setZIndexState([...zIndex, newZIndex]);
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
    <div className={styles.container} onMouseDown={handleClick} ref={containerRef}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          zIndex={zIndex}
          setZIndex={setZIndex}
          containerRef={containerRef}
          
        />
      ))}
    </div>
  );
};

export default GameField;


