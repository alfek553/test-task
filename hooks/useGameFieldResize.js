import  { useState, useEffect, useRef } from 'react';

/**
 * Обновление позиции при изменении размеров окна
 * @property {object} [initialPosition] - Позиция x,y и размеры карточки sizeBlock
 * @property {object} [gameFieldSize] - Размеры игрового поля width, height
 */
export const useGameFieldResize = (initialPosition, gameFieldSize) => {
    const [position, setPosition] = useState( {x:initialPosition.x , y: initialPosition.y});
    const prevWindowSize = useRef(gameFieldSize);
useEffect(() => {
    const handleResize = () => {
      //рассчет коэф изменения экрана * на координату
      let newX=( gameFieldSize.width/prevWindowSize.current.width) * position.x;
      let newY = ( gameFieldSize.height/prevWindowSize.current.height) * position.y;

      if (newY < 0) {
        newY = 0;
      }
      if (newX < 0) {
        newX = 0;
      }
      //если при изменении карточка выходит за пределы поля.
      const resizeY = (gameFieldSize.height  - newY < (initialPosition.sizeBlock))
       ? (gameFieldSize.height  - initialPosition.sizeBlock) : newY; 
      const resizeX = (gameFieldSize.width - newX < (initialPosition.sizeBlock)) 
       ? (gameFieldSize.width - initialPosition.sizeBlock) : newX;
      
            
            setPosition({ x:resizeX , y: resizeY  });
    };

    handleResize(); // Установить начальную позицию
    prevWindowSize.current = gameFieldSize;
  }, [gameFieldSize]);

  return { position, setPosition };
}