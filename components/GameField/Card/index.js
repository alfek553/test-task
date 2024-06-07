'use client';
import React from 'react';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';
import  { useState, useEffect, useRef } from 'react';


function Card({ x, y, index,zIndex, setZIndex }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const cardRef = useRef(null);

  const handleDragStart = () => {
    // setDraggingIndex(index);
    setZIndex(index, Math.max(...zIndex) + 1); // Установить самый высокий zIndex
  };

  useEffect(() => {
    // Начало анимации
    const timeout = setTimeout(() => setIsAnimating(false), 300); // 300ms - длительность анимации в CSS
    return () => clearTimeout(timeout);
  }, []);


  const handleDragEnd = () => {
    // setDraggingIndex(null);
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
        ${isAnimating ? styles.animating : ''}`
      
      }
      ref={cardRef}
      style={{ '--x': `${x}px`, '--y': `${y}px`,zIndex: zIndex[index] }}
        // style={{ left: x, top: y }}
      >
      </div>
    </Draggable>
  );
}

export default Card;


// const Card = ({ x, y }) => {
//   const [dragging, setDragging] = useState(false);
//   const cardRef = useRef(null);

//   const onStart = () => setDragging(true);
//   const onStop = () => setDragging(false);

//   return (
//     <Draggable
//       defaultPosition={{ x, y }}
//       bounds="parent"
//       onStart={onStart}
//       onStop={onStop}
//       nodeRef={cardRef}
//     >
//       <div className={styles.card} ref={cardRef}>
//         {/* Содержимое карточки */}
//       </div>
//     </Draggable>
//   );
// };

// export default Card;
