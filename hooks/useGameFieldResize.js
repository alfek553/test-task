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
      
      const newX=( gameFieldSize.width/prevWindowSize.current.width) * initialPosition.x;
      const newY = ( gameFieldSize.height/prevWindowSize.current.height) * initialPosition.y;
      const resizeY = (gameFieldSize.height - newY < (initialPosition.sizeBlock)) ? (gameFieldSize.height - initialPosition.sizeBlock) : newY; // 
      
            
            setPosition({ x:newX , y: resizeY  });
    };

    handleResize(); // Установить начальную позицию
    prevWindowSize.current = gameFieldSize;
  }, [gameFieldSize]);

  return { position, setPosition };
}