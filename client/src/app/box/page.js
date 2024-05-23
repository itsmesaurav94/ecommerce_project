'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeHeight } from '../redux/reducerSlices/boxSlice'


const Box = () => {
    const {height, width, backgroundColor} = useSelector(state=>state.box)
    const dispatch = useDispatch()

  return (
    <div>
      <div style={{backgroundColor: backgroundColor, height: height, width:width }}>
        hi
      </div>
          <Button onClick={()=>dispatch(changeWidth())}>+Width</Button>
          <Button onClick={()=>dispatch(changeHeight())}>+Height</Button>
          <Button>Change Shape</Button>
          <input placeholder='Enter color'></input>

    </div>
  )
}

export default Box