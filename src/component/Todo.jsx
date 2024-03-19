// import { Button } from '@mui/base'
import { ListItem , Button, Box} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = () => {
    // Select the todos array from the store state
    const todos= useSelector(state=>state.todos)
    console.log("the todos", todos)
    const dispatch= useDispatch()
  return (
   <>
   <Box>
    
   </Box>
   {
    todos.map((todo)=>(
<ListItem key={todo.id}>
    {todo.text}
   <Button onClick={()=>dispatch(removeTodo(todo.id))}>
    <DeleteIcon color='warning'/>
    
   </Button>
  
</ListItem>
    ))
   }
   </>
  )
}

export default Todo