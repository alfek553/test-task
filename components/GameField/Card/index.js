'use client';
import React from 'react';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';
import  { useState, useEffect, useRef } from 'react';


function Card({ x, y,sizeBlock, index,zIndex, setZIndex, windowSize }) {


  const [position, setPosition] = useState({ x:x , y: y }); // состояние для позиции
  const [isAnimating, setIsAnimating] = useState(true);//появление карточки
  const [isDragging, setIsDragging] = useState(false);//перемещается ли карточка
  const cardRef = useRef(null);//устранение ошибки для dragging
  const [randomNumber, setRandomNumber] = useState(1); 

  const prevWindowSize = useRef(windowSize);
  // Обновление позиции при изменении размеров окна
  useEffect(() => {
    const handleResize = () => {
      
      const newX=( windowSize.width/prevWindowSize.current.width) * position.x;
      const newY = ( windowSize.height/prevWindowSize.current.height) * position.y;
      const newxY = (windowSize.height - newY < (sizeBlock)) ? (windowSize.height - sizeBlock) : newY; // 
      
            
            setPosition({ x:newX , y: newxY  });
    };

    handleResize(); // Установить начальную позицию
    prevWindowSize.current = windowSize;
    // return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);



useEffect(() => {
  setRandomNumber(Math.floor(Math.random() * 5) + 1);// Генерируем случайное число от 1 до 5 для изображения
  

}, []); // Вычисляем randomNumber только один раз при монтировании

useEffect(() => {
  // Начало анимации появления карточки
  const timeout = setTimeout(() => setIsAnimating(false), 300); // 300ms - длительность анимации в CSS
  return () => clearTimeout(timeout);
  }, []);
  
  //Карточка нажата
  const handleDragStart = () => {
    setZIndex(index, Math.max(...zIndex) + 1); // Установить самый высокий zIndex
    setIsDragging(true);
  };

  //Карточка опущена
  const handleDragEnd = (e, data) => {
    setIsDragging(false);
    setPosition({ x: data.x, y: data.y });
  };



  return (
    <Draggable
    defaultPosition={{x: x, y: y}}
      bounds="parent"
      onStop={handleDragEnd}
      onStart={handleDragStart}
      nodeRef={cardRef}
      position={position}
    >
      <div
        className={`${styles.card} 
        ${isAnimating ? styles.animating : ''}
        ${isDragging ? styles.dragging : ''}`
      
      }
      ref={cardRef}
      style={{ '--x': `${position.x}px`, '--y': `${position.y}px`,
      zIndex: zIndex[index],
      backgroundImage: `url('/image/${randomNumber}.png')`,
    }}

      >
      </div>
    </Draggable>
  );
}

export default Card;
