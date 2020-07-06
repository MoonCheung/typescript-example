import { useEffect } from 'react';

// 设置标题
export default function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
