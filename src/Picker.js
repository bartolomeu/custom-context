// import { useState } from 'react'
import { SketchPicker } from 'react-color'
import { createDataset, useDataset } from './createDataset'

export const colorData = createDataset('#22194D')

export function Picker(){
  console.log('componente foi remontado?!?');
  const [color, setColor] = useDataset(colorData)
  // const [color, setColor] = useState('#225533')
  return (<SketchPicker
    color={color}
    onChangeComplete={({hex}) => {
      console.log('componente disporou !!');
      setColor(hex)
    }}
  />)

}