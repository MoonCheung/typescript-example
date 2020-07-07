import React, { useState } from 'react';
import { Slider } from 'antd';
import '@/styles/index.less';

interface styleType {
  width?: number;
  height?: number;
  color: {
    r?: number;
    g?: number;
    b?: number;
  };
  radius?: number;
}

const ProgressBar = () => {
  const [width, setWidth] = useState<styleType['width']>(80);
  const [height, setHeight] = useState<styleType['height']>(80);
  const [color, setColor] = useState<styleType['color']>({ r: 0, g: 0, b: 0 });
  const [radius, setRadius] = useState<styleType['radius']>(0);

  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    borderRadius: `${radius}px`
  };
  return (
    <>
      <div className='progress_wrap'>
        <label>
          <span>宽度:</span>
          <Slider max={300} min={10} onChange={(value: any) => setWidth(value)} />
        </label>
        <label>
          <span>高度:</span>
          <Slider max={300} min={10} onChange={(event: any) => setHeight(event)} />
        </label>
        <label>
          <span>Color: R:</span>
          <Slider
            max={255}
            min={10}
            onChange={(event: any) =>
              setColor({
                ...color,
                r: event
              })
            }
          />
        </label>
        <label>
          <span>Color: G:</span>
          <Slider
            max={255}
            min={10}
            onChange={(event: any) =>
              setColor({
                ...color,
                g: event
              })
            }
          />
        </label>
        <label>
          <span>Color: B:</span>
          <Slider
            max={255}
            min={10}
            onChange={(event: any) =>
              setColor({
                ...color,
                b: event
              })
            }
          />
        </label>
        <label>
          <span>半径:</span>
          <Slider max={50} min={10} onChange={(event: any) => setRadius(event)} />
        </label>
        <div className='block' style={styles}></div>
      </div>
    </>
  );
};

export default ProgressBar;
