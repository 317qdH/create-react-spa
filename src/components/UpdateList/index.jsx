import React, { useState } from 'react';
import './index.css'
import OutTransfer from '../Transfer'

const UpdateList = () => {

    const [selectList, setSelectList] = useState([]);

    const handleSelect = (school) => {
        if(selectList.findIndex(citem => citem.id === school.id) === -1){
            const newSelect = selectList.slice();
            newSelect.push(school);
            setSelectList(newSelect);
        }
    }

    const Transfer = () => {
        return (
            <div className='main'>
                <ul className='content'>
                    {Mock.map((item)=>{
                        return (
                            <li 
                                key={item.id} 
                                className={`${(selectList.findIndex(citem => citem.id === item.id) === -1)?'':'selected'}`} 
                                onClick={() => handleSelect(item)}
                                >
                            {item.name}
                            </li>
                        )
                    })}
                </ul>
                <ul className='select'>
                    {selectList.map((citem)=>{
                        return (
                            <li key={citem.id}>{citem.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Transfer></Transfer>
            {/* {Transfer()} */}
            {/* <OutTransfer Mock={Mock} selectList={selectList} handleSelect={handleSelect}></OutTransfer> */}
        </div>
    )
}

export default UpdateList

const Mock = [
    {
        id:1,
        name:'学校1'
    },
    {
        id:2,
        name:'学校2'
    },
    {
        id:3,
        name:'学校3'
    },
    {
        id:4,
        name:'学校4'
    },
    {
        id:5,
        name:'学校5'
    },
    {
        id:6,
        name:'学校6'
    },
    {
        id:7,
        name:'学校7'
    },
    {
        id:8,
        name:'学校8'
    },
    {
        id:9,
        name:'学校9'
    },
    {
        id:10,
        name:'学校10'
    },
    {
        id:11,
        name:'学校11'
    },
    {
        id:12,
        name:'学校12'
    },
]