import { useContext } from 'react'
import { Data, Data1 } from './App'

/*const ComponentC = () => {
  
  return (
    <>
    <Data.Consumer>
      {(name) => {
        //return <h1>My name is: {name}</h1>

        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is: {name} & I'm {age} years old.
                </h1>
              )
            }}
            
          </Data1.Consumer>
        )
      }}
    </Data.Consumer>
    </>
  )
}*/ 

const ComponentC = () => {
  const Uname = useContext(Data)
  const Uage = useContext(Data1)
  return (
    <h1>My name is {Uname} & i'm {Uage} years old</h1>

  )
}

export default ComponentC 