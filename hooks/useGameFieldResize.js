import  { useState, useEffect, useRef } from 'react';

/**
 * Обновление позиции при изменении размеров окна
 * @property {object} [initialPosition] - Позиция x,y и размеры карточки sizeBlock
 * @property {object} [containerRef] - 
 */
export const useGameFieldResize = (card, containerRef) => {

    const [position, setPosition] = useState( {x:card.x , y: card.y});
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const prevWindowSize = useRef(containerSize);


  //измерение размера игрового поля
  const updateContainerSize = () => {
    
    if (containerRef.current) {
      const { width, height,left,top } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width:width-left, height: height   });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      updateContainerSize();
  }
    window.addEventListener('resize', updateContainerSize);

    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, [containerRef]);



useEffect(() => {
    const handleResize = () => {

      if (prevWindowSize.current.width && containerSize.width) {

      //рассчет коэф изменения экрана * на координату
      let newX=( containerSize.width/prevWindowSize.current.width) * position.x;
      let newY = ( containerSize.height/prevWindowSize.current.height) * position.y;
      if (newY < 0) {
        newY = 0;
      }
      if (newX < 0) {
        newX = 0;
      }
      //если при изменении карточка выходит за пределы поля.
      const resizeY = (containerSize.height  - newY < (card.sizeBlock))
       ? (containerSize.height  - card.sizeBlock) : newY; 
      const resizeX = (containerSize.width - newX < (card.sizeBlock)) 
       ? (containerSize.width - card.sizeBlock) : newX;

      setPosition({ x:resizeX , y: resizeY  });
    }
    };

    handleResize(); // Установить начальную позицию
    prevWindowSize.current = containerSize;
  }, [containerSize]);

  return { position, setPosition };
}
