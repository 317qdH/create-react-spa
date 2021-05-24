//react-router切换中间过渡动画组件
import React from 'react';

const Loading = (mes) => {
  if (mes.error) {
    return <span>报错了</span>;
  }
  return (
    <div>
      <div>
        <div/>
        <div>努力加载中...</div>
      </div>
    </div>
  );
};
export default Loading;
