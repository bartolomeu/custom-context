import { useEffect, useState } from "react"

const createSubscribe = () => {
  console.log('createSubscribe');
  const listeners = new Set()
  return {
    subscribe: (listener) => {
      listeners.add(listener)
      console.log('entrei no subscribe');
      console.log(listeners);
      return () =>listeners.delete(listener)
    },
    emit: (event) => {
      console.log('fui emitido');
      listeners.forEach(listener => {
        listener(event)
      })
    }
  }
}

export const createDataset = (initial) => {
  console.log('criado DT');
  const map = new Map()
  const subscriber = createSubscribe()
  map.set('value', initial)
  return { map, subscriber }
}

export const useDataset = ({ map, subscriber }) => {
  console.log('useDT called');
  console.log(map);
  const [value, setValue] = useState(()=> map.get('value'))
  
  useEffect(()=>{
    console.log('effect foi chamado');
    const unsubscribe =subscriber.subscribe(event =>{
      console.log('vou passar um novo valor');
      const currenteValue = map.get('value')
      const nextValue = typeof event === 'function' ? event(currenteValue) : event
      map.set('value', nextValue)
      setValue(map.get('value '))
      return () => unsubscribe()
    })
  }, [map, subscriber])

  const handler = (val) => {
    console.log('handler chamado');
    subscriber.emit(val)
  }

  return [ value, handler]
  
}