import React, { useState, useCallback } from 'react';
import useCounter from './useCounter';
import usePageTitle from './usePageTitle';
import '@/styles/index.less';

interface Position {
  x: number;
  y: number;
}

const DragHook = () => {
  const point = { x: 0, y: 0 };
  const [startPointPostion, setStartPointPostion] = useState<Position>(point);
  const [currPointPostion, setCurrPointPostion] = useState<Position>(point);
  const [endPointPostion, setEndPointPostion] = useState<Position>(point);

  const counter = useCounter(currPointPostion.x);
  usePageTitle(`拖曳：${counter}`);

  const start = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      setStartPointPostion({ x: event.clientX, y: event.clientY });
    },
    [setStartPointPostion]
  );

  const move = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!event.clientX && !event.clientY) {
        return;
      }

      const pointPostion: Position = {
        x: event.clientX - startPointPostion.x,
        y: event.clientY - startPointPostion.y
      };

      setCurrPointPostion({
        x: endPointPostion.x + pointPostion.x,
        y: endPointPostion.y + pointPostion.y
      });
    },
    [startPointPostion, endPointPostion]
  );

  const end = useCallback(() => {
    setEndPointPostion(currPointPostion);
  }, [setEndPointPostion, currPointPostion]);

  return (
    <>
      <div className='drag_wrap'>
        <div>白色方块位置变动次数：{counter}</div>
        <div
          className='block'
          onDragStart={start}
          onDrag={move}
          onDragEnd={end}
          draggable='true'
          style={{ left: `${currPointPostion.x}px`, top: `${currPointPostion.y}px` }}>
          {counter}
        </div>
      </div>
    </>
  );
};

export default DragHook;
