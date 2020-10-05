import React, { useState } from 'react' 
import Todo from './Todo'
// import Progress from './Progress'
// import Done from './Done'


export default function Interface(props) {

    const [value, setValue] = useState('')

    const [todos, setTodos] = useState([])

    

    function handleChange(e) {
        setValue(e.target.value)
      }

   return (
   <div className='interface'>
       <Todo userInput={ <input type="text" value={value} onChange={handleChange} />} 
       todos={todos} addTodo = {<button onClick={()=>{
           
        setTodos([...todos, value])
        setValue('')
        
    }}>Add Todo</button>} 
       value = {value}/>
       
   </div>
   )
}