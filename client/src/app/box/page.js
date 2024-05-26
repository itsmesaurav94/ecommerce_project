'use client'
import { Button, Input } from '@nextui-org/react'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeBackgroundColor, changeHeight, changeShape, changeWidth, shiftPosition, shiftPositionTop } from '../redux/reducerSlices/boxSlice'

const Box = () => {
    const {height, width, backgroundColor, borderRadius, right, top } = 
    useSelector(state=>state.box)
    const dispatch = useDispatch()
  const generateArea = () => {
    if(borderRadius === '50%'){
      return Math.PI * (width/2) ** 2
    }else{
      return width * height
    }

  }
  return (
    <div className='flex items-center flex-col p-20'>
      <div style={{backgroundColor, height, width, borderRadius, right, top, position:'relative', margin: '200px' }}>
      </div>
      {generateArea()}
      <Button onClick={()=> dispatch(shiftPosition(100))}>Left</Button>
      <Button onClick={()=> dispatch(shiftPosition(-100))}>Right</Button>
      <Button onClick={()=> dispatch(shiftPositionTop(-100))}>Up</Button>
      <Button onClick={()=> dispatch(shiftPositionTop(100))}>Bottom</Button>

    <Button onClick={()=>dispatch(changeWidth()) }>+Width</Button>
    <Button onClick={()=> dispatch(changeHeight())}>+Height</Button>
    <Button  onClick={()=> dispatch(changeShape())}>Change shape</Button>
    <Input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value)) } placeholder='Enter color'/>
    </div>
  )
}
export default Box