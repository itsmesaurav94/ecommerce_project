'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
    const {backgroundColor, height, width} = useSelector(state=>state.box)
  return (
    <div>
        <div ></div>
    </div>
  )
}

export default Box