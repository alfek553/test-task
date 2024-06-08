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
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  
  const updateContainerSize = () => {
    if (containerRef.current) {
      const { width, height,left,top } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width:width-left, height: height + top  });
    }
  };

  useEffect(() => {
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);
    
 
    //Создание новой карточки
    const handleClick = (event) => {
      if (event.currentTarget === event.target) {
        const containerRect = event.currentTarget.getBoundingClientRect();
        
        const sizeBlock = Math.max(containerRect.width * 0.05, 30);//размеры карточки (только ширина, потому что квадрат)
        
      //координаты нажатия
      let x= (event.clientX - containerRect.left) -(sizeBlock/2);
      let y = (event.clientY - containerRect.top)-(sizeBlock/2);

      //  let xRatio= (x / (containerRect.width)) ;
      //  let yRatio = (y / (containerRect.height+containerRect.top)) ;

      //если карточка выходит за игровое поле сместить её, чтобы поместилась
      if (containerRect.height - y < sizeBlock) {
        y = containerRect.height - sizeBlock;
        // yRatio = y/ (containerRect.height+containerRect.top) ;
      
      }

      if (containerRect.width - x < sizeBlock) {
        x = containerRect.width - sizeBlock;
        // xRatio=x/ (containerRect.width);
      }

      const uniqueId = uuidv4();
      const newZIndex = Math.max(...zIndex, 0) + 1;
    setCards([...cards, {id:uniqueId, x, y,sizeBlock, }]);
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
    <div className={styles.container} onMouseDown={handleClick} ref={containerRef}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          y={card.y}
          x={card.x}
          sizeBlock={card.sizeBlock}
          index={index}
          zIndex={zIndex}
          setZIndex={setZIndex}
          windowSize={containerSize}

          
        />
      ))}
    </div>
  );
};

export default GameField;


