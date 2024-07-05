import {TodoForm, TodoItemList} from '@/components';
import { addItem, getItems } from '@/utils/api';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {ITodosItem} from '@/types/todos';


export default function Home() {
  const [todos, setTodos] = useState<ITodosItem[]>([]);

  const getTodos = async() => {
    const todos = await getItems();
    setTodos(todos)
  }

  const handleAddTodo = async(todo: ITodosItem) => {
    const newTodo = await addItem(todo)
    setTodos([...todos, newTodo]);
  }

  //첫 todo 가져오기
  useEffect(() => {
    getTodos();  
  }, [])

  return (
    <>
      <Container>
        <Typography variant='h3'>
          to do ~
        </Typography>
        <TodoForm addTodo={handleAddTodo}/>
        <TodoItemList />
      </Container>
    </>
    
  );
}
