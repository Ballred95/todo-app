import React from 'react' 
import SingleTodo from './singleTodo';

export default function Todo(props) {



   return (
   
   <div className='todo'>
      <h1 style={{textAlign: 'center'}}>Todo</h1>
       <div className="userinput" style={{textAlign: 'center'}}>{props.userInput}</div> 
       <div className="userinput" style={{textAlign: 'center'}}>{props.addTodo}</div> 
        {/* {props.todos} */}
        {props.todos.map(todo => <SingleTodo todo={todo}/>)}
       
       

   </div>
   
   )
}