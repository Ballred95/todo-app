import React, { useState } from 'react' 
import Todo from './Todo'
import Progress from './Progress'
import Done from './Done'

export default function Interface(props) {

    const [value, setValue] = useState('')

    const [todos, setTodos] = useState([1, 2, 3, 4, 5])

    

    function handleChange(e) {
        setValue(e.target.value)
      }

   return (
   <div className='interface'>
       <Todo userInput={ <input type="text" value={value} onChange={handleChange} />} 
       todos={todos.map(todo=> <h1>{todo}</h1>)} addTodo = {<button onClick={()=>{
           
        setTodos([...todos, value])
        
    }}>Add todo</button>} 
       value = {value}/>
       <Progress />
       <Done />
   </div>
   )
}