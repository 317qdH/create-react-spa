import React, { useCallback, useEffect, useState } from 'react';
import OuterUp from '../OuterUp/index';
import './index.css'

const UpdateComponent = () => {

    const [upState, setUpState] = useState(1);

    const UpdateComp = () => {
        return (
            <h1>{upState}</h1>
        )
    }

    const handleClick = () => {
        setUpState(upState+1)
    }

    return (
        <div>
            <span>
                <UpdateComp></UpdateComp>
            </span>
            <span>
               {UpdateComp()}
            </span>
            <span>
                <h1>{upState}</h1>
            </span>
            <span>
                <OuterUp upState={upState}></OuterUp>
            </span>
            <div className='btn' onClick={handleClick}>点击</div>
        </div>
    )
}

export default UpdateComponent