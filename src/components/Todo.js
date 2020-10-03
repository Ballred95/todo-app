import React from 'react' 
import SingleTodo from './singleTodo';

export default function Todo(props) {



   return (
   
   <div className='todo'>
       {props.userInput}
       {props.addTodo}
        {/* {props.todos} */}
        {props.todos.map(todo => <SingleTodo todo={todo}/>)}
       
       

   </div>
   
   )
}