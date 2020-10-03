import React from 'react' 
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

export default function SingleTodo(props) {
   return (
   <div className=''>
       <Draggable>
       <h1>{props.todo}</h1>
       </Draggable>
   </div>
   )
}