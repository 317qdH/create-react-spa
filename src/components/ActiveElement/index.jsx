import React, { Component } from 'react';
import { Button,Input} from 'antd';
const Demo  = () => {
		const handleBlur = () => {
            console.log('shijioa')
        }
		const handleClick = () => {
            console.log('点击')
			// 失焦事件会不执行了 需要手动执行
            console.log(document.activeElement)
			document.activeElement && document.activeElement.blur();
			// 执行下面的代码
		}
		return (
            <div>
                    <Input onBlur={handleBlur} value={'sdjk'}/>
                    <Button onMouseDown={handleClick}>是三生三世所所所所</Button>
            </div>
        )
}

export default Demo