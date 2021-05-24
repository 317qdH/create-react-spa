import React from 'react';

const Transfer = (props) => {
    return (
        <div className='main'>
            <ul className='content'>
                {props.Mock.map((item)=>{
                    return (
                        <li key={item.id} className={`${(props.selectList.findIndex(citem => citem.id === item.id) === -1)?'':'selected'}`} onClick={() => props.handleSelect(item)}>{item.name}</li>
                    )
                })}
            </ul>
            <ul className='select'>
                {props.selectList.map((citem)=>{
                    return (
                        <li key={citem.id}>{citem.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Transfer