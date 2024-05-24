'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBackgroundColor, changeHeight, changeShape, changeWidth } from '../redux/reducerSlices/boxSlice'


const Box = () => {
    const {height, width, backgroundColor, borderRadius} = useSelector(state=>state.box)
    const dispatch = useDispatch()

  return (
    <div>
      <div style={{backgroundColor: backgroundColor, height: height, width:width, borderRadius: borderRadius }}>
        hi
      </div>
          <Button onClick={()=>dispatch(changeWidth())}>+Width</Button>
          <Button onClick={()=>dispatch(changeHeight())}>+Height</Button>
          <Button onClick={()=>dispatch(changeShape())}>Change Shape</Button>
          <input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value))}placeholder='Enter color'></input>

    </div>
  )
}

export default Box