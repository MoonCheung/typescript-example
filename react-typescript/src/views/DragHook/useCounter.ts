import { useState, useEffect } from 'react';

// 用于记录某个值的变化次数
export default function useCounter(param: number) {
  const [counter, setCounter] = useState(param);

  useEffect(() => {
    setCounter(param + 1);
  }, [param]);

  // 返回更新后最新的state的值
  return counter;
}
