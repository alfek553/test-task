'use client';
import React from 'react';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';
import  { useState, useEffect, useRef } from 'react';


function Card({ x, y, index,zIndex, setZIndex }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);

  const [randomNumber, setRandomNumber] = useState(1); 

useEffect(() => {
  setRandomNumber(Math.floor(Math.random() * 4) + 1);// Генерируем случайное число от 1 до 4 для изображения
}, []); // Вычисляем randomNumber только один раз при монтировании

  const handleDragStart = () => {
    setZIndex(index, Math.max(...zIndex) + 1); // Установить самый высокий zIndex
    setIsDragging(true);
  };

  useEffect(() => {
    // Начало анимации
    const timeout = setTimeout(() => setIsAnimating(false), 300); // 300ms - длительность анимации в CSS
    return () => clearTimeout(timeout);
  }, []);


  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <Draggable
    defaultPosition={{x: x, y: y}}
      bounds="parent"
      onStop={handleDragEnd}
      onStart={handleDragStart}
      nodeRef={cardRef}
    >
      <div
        className={`${styles.card} 
        ${isAnimating ? styles.animating : ''}
        ${isDragging ? styles.dragging : ''}`
      
      }
      ref={cardRef}
      style={{ '--x': `${x}px`, '--y': `${y}px`,
      zIndex: zIndex[index],
      backgroundImage: `url('/image/${randomNumber}.png')`,
    }}
        // style={{ left: x, top: y }}
      >
      </div>
    </Draggable>
  );
}

export default Card;
