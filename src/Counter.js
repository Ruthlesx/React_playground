import {useState} from 'react' 
import './index.css'


const Counter = () => {

  let [count, setCount] = useState(0)

  const increment = () => {
     setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(count = 0)
    console.log(0)
  }

  return (
    <>
     <div className="container">
      <h1 className="number">{count}</h1>
      <button className="increment" onClick={increment}>+</button>
      <button className="decrement" onClick={decrement}>-</button>
      <button className="reset" onClick={reset}>Reset</button>
      </div> 
    </>
  )
}

export default Counter