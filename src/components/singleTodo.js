import React, { useState } from 'react' 
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

export default function SingleTodo(props) {

    const [style, setStyle] =useState('')

   return (
   <div className='singletodo'>
     <hr />  
     <div className="to-contain">
   <h1  style={{textDecoration: `${style}`}}>{props.todo}</h1>
   <button onClick={()=>setStyle('line-through')}>cross out todo</button>
   </div>
   <hr />  
   </div>
   )
}