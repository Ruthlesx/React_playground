import logo from './logo.svg';
import React from 'react';
import './index.css'
import {useEffect, useState} from 'react';
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
  const [friends, setFriends] = useState(["Alex", "Obi"])

  const addOne = () => {
    setFriends([ ...friends,"ola"])
  }

  const removeOne = () => {
    setFriends(friends.filter((f) => f!== "Alex"))
 

  }

  const updateOne = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)))

  }

  return (
    <>
    {friends.map((f) => (<li key={Math.random()}>{f}</li>))}


    <button onClick={addOne}> Add One</button>
    <button onClick={removeOne}> Remove One</button>
    <button onClick={updateOne}> Update One</button>
    </>

   
  
} 

  function App() {

    const [movie, setMovie] = useState({
      title: "Inside Out 2",
      ratings: 9
    })

    const handleClick = () => {
      const copyMovie = {
        ...movie,
        ratings: 5,
      }

      setMovie(copyMovie)
    }

    return (

      <> 
      <h1>{movie.title}</h1>
      <p>Rating: {movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
      </>
    )
  }
    *

  function App() {

    const [movies, setMovies] = useState([
      {id: 1, title: "SpiderMan", ratings: 7.4 },
      {id: 2, title: "SuperMan", ratings: 8.9},
      {id: 3, title: "BatMan", ratings: 7.9},
    ])

    const handleClick = () => {
      setMovies(
        movies.map((m) => (m.id === 3 ? {...movies, title: "John Wick 4"} : m) )
      )
    }

    return (
      <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button>

      </>
    )
  } 

    function App () {

      const [username, setUsername] = useState('')

      const handleChange = (event) => {
        setUsername(event.target.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You typed ${username}`)
        setUsername('')

      }

      return (
        <>
        <h1>Form Demo</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleChange}/>
          <button >Submit</button>
        </form>
        
        </>
      )
    } 
      
    function App() {
        const [value, setValue] = useState(0)

        //3 things that happeen in useEffect()
        
        // 1. Render for the (first time)
        // 2. Anytime we do (side effect)
        // 3. Dependency List/Array
        
        useEffect(() => {
          console.log("Hello")
          document.title = `increment(${value})`
      }, [value])

        return (
          <>
          <h1>
            {value}
          </h1>

          <button onClick={() => setValue(value + 1)} >+</button>
            
            </>
        )
      } */


        function App () {

          const [data, setData] = useState([])

          useEffect(() => {
            async function getData() {
              const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
              const data = await response.json();
              if (data && data.length) setData(data)
            } 

            getData()
          }, [])

          return (
            <>
            <ul>
            {data.map((item) => (
              <li key={Math.random()}>{item.title}</li>
            ))}  
            </ul>
            </>
          )
        }




export default App
 