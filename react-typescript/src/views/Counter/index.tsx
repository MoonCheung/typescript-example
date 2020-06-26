import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button, Input } from 'antd';
import '@/styles/index.less';

// input styles
const inputStyle = {
  display: 'block',
  width: '100px',
  margin: '10px auto'
};

// NOTE: 不编写class的情况下使用state以及其他react的特性
const Counter = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  // useMemo 它仅会在某个依赖项改变时才重新计算这些值
  let sum = useMemo(() => {
    console.log('重新计算一次');
    let _sum = 0;
    for (let i = 1; i <= count; i++) {
      _sum += i;
    }
    return _sum;
  }, [count]);

  // useCallback 它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
  const inputChange = useCallback((event) => {
    console.log('cat event', event.target.value);
  }, []);

  return (
    <>
      <p>You clicked {sum} times</p>
      <Input style={inputStyle} placeholder='输入数字' onChange={inputChange} />
      <Button type='primary' onClick={() => setCount(count + 1)}>
        增量
      </Button>
      &nbsp;&nbsp;
      <Button type='primary' disabled={count === 0} onClick={() => setCount(count - 1)}>
        减量
      </Button>
    </>
  );
};

export default Counter;
