import React, { useState, useRef, useEffect, useCallback } from 'react';
import anime from 'animejs';
import '@/styles/index.less';

const Anime = () => {
  const [anime01, setAnime01] = useState(false);
  const [anime02, setAnime02] = useState(false);

  const [counter, setCounter] = useState(0);

  const [anime03, setAnime03] = useState(false);
  const [anime04, setAnime04] = useState(false);

  const element = useRef<HTMLDivElement>(null);
  const element3 = useRef<HTMLDivElement>(null);

  // 第一个anime动画例子
  useEffect(() => {
    anime01 && !anime02 && animate01();
    anime02 && !anime01 && animate02();

    return () => {
      console.log('启动动画块');
    };
  }, [anime01, anime02]);

  const animate01 = () => {
    if (element) {
      anime({
        targets: element.current,
        translateX: 400,
        backgroundColor: '#FF8F42',
        borderRadius: ['0%', '50%'],
        complete: () => {
          setAnime01(false);
        }
      });
    }
  };

  const animate02 = () => {
    if (element) {
      anime({
        targets: element.current,
        translateX: 0,
        backgroundColor: '#FFF',
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        complete: () => {
          setAnime02(false);
        }
      });
    }
  };

  const onAnime = () => {
    setAnime01(true);
    setTimeout(setAnime02.bind(null, true), 500);
  };

  // 第二个counter例子
  useEffect(() => {
    // DOM渲染完成之后副作用执行
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  // 第三个anime动画例子
  const animate03 = useCallback(() => {
    if (element3) {
      anime({
        targets: element3.current,
        backgroundColor: '#44c582',
        translateX: 400,
        scale: 1,
        rotate: '1turn',
        complete: () => {
          setAnime03(false);
        }
      });
    }
  }, [element3]);

  const animate04 = useCallback(() => {
    if (element3) {
      anime({
        targets: element3.current,
        backgroundColor: '#FFF',
        easing: 'easeInOutQuad',
        translateX: 0,
        scale: 1,
        rotate: '0turn',
        complete: () => {
          setAnime04(false);
        }
      });
    }
  }, [element3]);

  useEffect(() => {
    anime03 && animate03();
    return () => {
      console.log('启动动画块03');
    };
  }, [anime03, animate03]);

  useEffect(() => {
    anime04 && animate04();
    return () => {
      console.log('启动动画块04');
    };
  }, [anime04, animate04]);

  const onAnime3 = useCallback(() => {
    setAnime03(true);
    setTimeout(setAnime04.bind(null, true), 500);
  }, []);

  return (
    <>
      <div className='anime_wrap'>
        <div className='block' ref={element} onClick={onAnime} />
        <br />
        <div className='block'>{counter}</div>
        <br />
        <div className='block' ref={element3} onClick={onAnime3} />
      </div>
    </>
  );
};

export default Anime;
