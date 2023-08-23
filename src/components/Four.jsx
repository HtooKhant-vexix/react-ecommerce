import React from 'react'
import { StateContextCustom } from '../context/context'

const Four = () => {

    const{dispatch} = StateContextCustom();
  return (
    <div>
        <button onClick={()=>dispatch({type: 'decrease'})}>de</button>
    </div>
  )
}

export default Four