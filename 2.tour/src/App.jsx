

import React, { useState } from 'react'
import Tours from './component/Tours'
import Data from './data'

function App() {

  const[data,setData]= useState(Data)
  // console.log(data)

  function removeTour(id){
     let newData = data.filter(dat => dat.id !== id)
  // console.log(newData)
     setData(newData)
  }

 

if(data.length  === 0)
{ return (
  <div className='refresh'>
    <h2>NO Tours Left</h2>
    <button className='btn-white' onClick={()=>setData(Data)}>Refrest</button>
  </div>
  )
}
  return (
    <div>
        <Tours data={data} removeTour={removeTour}/>
    </div>
  )
}

export default App