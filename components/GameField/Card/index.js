'use client';
import PropTypes from 'prop-types';
import React from 'react';
//Style
import styles from './styles.module.scss';
//Hooks
import  { useState, useEffect, useRef } from 'react';
import { useGameFieldResize } from '@/hooks/useGameFieldResize';
//Components
import Draggable from 'react-draggable';


/**
* Компонент `Card` отображает игровую карточку
 *@property {object} [card] - Параметры карточки x, y, id, sizeBlock
 *@property {number} [index] - Индекс карточки 
 *@property {array} [zIndex] - Массив Z-индексов карточек
 *@property {function} [setZIndex] - Функция для изменения массивов Z-индексов карточек
 *@property {object} [containerRef] - 
 */
function Card({card, index,zIndex, setZIndex,containerRef }) {
  const [isAnimating, setIsAnimating] = useState(true);//появление карточки
  const [isDragging, setIsDragging] = useState(false);//перемещается ли карточка
  const cardRef = useRef(null);
  const [randomNumber, setRandomNumber] = useState(1); 
  const { position, setPosition } = useGameFieldResize(card,containerRef);//хук для вычисления позиции при resize

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
    defaultPosition={{x: card.x, y: card.y}}
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
      style={{ '--x': `${card.x}px`, '--y': `${card.y}px`,
      zIndex: zIndex[index],
      backgroundImage: `url('/image/${randomNumber}.png')`,
    }}
      >
      </div>
    </Draggable>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  zIndex: PropTypes.object.isRequired,
  setZIndex: PropTypes.object.isRequired,
  containerRef: PropTypes.object.isRequired,
};

export default Card;
