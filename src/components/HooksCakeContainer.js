import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () =>  {
    const numOfCakes = useSelector(state => state.numOfCakes)
   return (
       <div>
       <h1>Num of Cakes - {numOfCakes}</h1>

       <button>Buy Cake</button>
       </div>
   )
}

export default HooksCakeContainer