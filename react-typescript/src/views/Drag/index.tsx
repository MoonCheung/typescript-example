import React from 'react';
import { Button } from 'antd';
import '@/styles/index.less';

class Drag extends React.Component {
  // 创建一个 ref 来存储 textInput 的 DOM 元素
  private dragBlock = React.createRef<HTMLUListElement>();

  private divY: number;
  private divX: number;
  private element: any;

  constructor(props: any) {
    super(props);
    this.divY = 0;
    this.divX = 0;
    this.element = null;

    this.onMousedown = this.onMousedown.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseup = this.onMouseup.bind(this);
  }

  // 创建block
  onCreateblock = () => {
    const container: any = this.dragBlock.current;
    const elem = document.createElement('li');
    this.element = elem;
    elem.addEventListener('mousedown', this.onMousedown);
    container.appendChild(elem);
  };

  // 指针设备按钮触发
  onMousedown = (event: any) => {
    const element = this.element;
    event = event || window.event;

    //偏移位置 = 元素的X-元素的offset
    this.divX = event.clientX - element.offsetLeft;
    this.divY = event.clientY - element.offsetTop;

    document.addEventListener('mousemove', this.onMousemove);
    document.addEventListener('mouseup', this.onMouseup);
  };

  // 指针设备移动触发
  onMousemove = (event: any) => {
    const element = this.element;
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const elementWid = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    event = event || window.event;
    //元素位置 = 现在鼠标位置 -元素的偏移值
    let left = event.clientX - this.divX;
    let top = event.clientY - this.divY;

    if (left < 0) {
      left = 0;
      return;
    }

    if (top < 0) {
      top = 0;
      return;
    }

    if (left > clientWidth - elementWid) {
      left = clientWidth - elementWid;
      return;
    }

    if (top > clientHeight - elementHeight) {
      top = clientHeight - elementHeight;
      return;
    }

    element.style.left = left + 'px';
    element.style.top = top + 'px';
  };

  // 指针设备按钮放开触发
  onMouseup = () => {
    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('mouseup', this.onMouseup);
  };

  render() {
    return (
      <div>
        <Button type='primary' onClick={this.onCreateblock.bind(this)}>
          创建块可拖曳
        </Button>
        <ul ref={this.dragBlock} className='container'></ul>
      </div>
    );
  }
}

export default Drag;
