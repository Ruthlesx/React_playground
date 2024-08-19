const User = ({name, hobbies, realData,age, children}) => {
  
  return (
    <section>
      <h1>Name: {name}</h1>
      <h2>Hobbies:  {hobbies}</h2>
      <h3>{age}</h3>
      <p>{realData.name}</p>
      {children}
      

      
    </section>)
}


export default User