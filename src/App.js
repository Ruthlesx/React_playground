import logo from './logo.svg';
import React from 'react';
import './index.css'
import {useState} from 'react';
//import User from './User'
//import Main from './main '
//import ReactDOMServer from 'react-dom/server'

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
/*
function App() {
  return <h1>Welcome Back Fool

  </h1> */
//}

 /*class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <h1>Hello ModaFucker</h1>
      <input placeholder= "Enter your Name"/>
    </div>
  }
  }  



const htmlString = ReactDOMServer.renderToString(<App />)

*/
/*
function App() {
  const MyName = "Alex Rugby"
  const multiply = (a,b) => a * b
  const RealClass = "Hola-class"

  return (
    <>
    <h1>{MyName}</h1>
    <h2>2+14 ={2 * 8}</h2>
    <p>My Friend: {["Amaka", " Amanda", " Dumz"]}</p>
    <p>12*2 = {multiply(6,4)}</p>
    <p>{multiply(7,3)}</p>
    <p className={RealClass}>Example Class</p>
    </>
    
  )
} */
/*
  const User = (props) => {

    console.log(props)
    return <section></section>
  } */

  /*
const ValidPassword = () => <h1>ValidPassword</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
 return isValid ? <ValidPassword/> : <InvalidPassword/>
}  */
     
 /* const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodies"]

  return (
    <>

   {items.length > 0 && <h2>You have {items.length} items in your cart</h2>} 


    <ul>
      <h4>Products</h4>
      
      {items.map((item) => (
        <li key={Math.random()}>{item}</li>
      ))}
    </ul>
    </>
  )
 } 


 const Button = () => {
    const handleClick = () => {
      console.log("i was clicked")
      alert("You clicked me")
      
    }

    return <button onClick={handleClick}>Click</button>
  }


*/




const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    console.log(count)
  }

  const decrement = () => {
    setCount(count - 1)
  }


 return (
 <>
  <h1>{count}</h1>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
 </>
 )
}


  function App() {
    return <>
    <Counter/>
    </>
    
  }

export default App;
