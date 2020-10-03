import React from 'react' 

export default function Todo(props) {



   return (
   <div className='todo'>
       {props.userInput}
       {props.addTodo}
       {props.todos}
       
       

   </div>
   )
}