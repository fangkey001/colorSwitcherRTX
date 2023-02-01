import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { change } from '@/features/colors/colorSlice'

export default function Home() {
  const dispatch = useDispatch()
  const bgColor = useSelector((state) => state.changeColor)

  const handleChangeColors = (color) => {
    dispatch(change(color))
  }

  return (
    <>
      <div style={{ backgroundColor: bgColor.colors, height: "100vh" }}>
        <div className="flex flex-col justify-center font-bold">
          <button onClick={() => handleChangeColors('Red')}>Red</button>
          <button onClick={() => handleChangeColors('blue')}>Blue</button>
          <button onClick={() => handleChangeColors('orange')}>Orange</button>
          <button onClick={() => handleChangeColors('violet')}>Violet</button>
          <button onClick={() => handleChangeColors('green')}>Green</button>
          <button onClick={() => handleChangeColors('pink')}>Pink</button>
        </div>
      </div>
    </>
  )
}
