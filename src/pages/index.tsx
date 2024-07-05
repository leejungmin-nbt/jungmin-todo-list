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
        <div style={{display: 'flex', flexDirection:'column'}}>
          <Typography variant='h3'>
            N___BT - 정민
          </Typography>
          <div style={{width: '100%', margin: '20px 0px'}}/>
          <TodoForm addTodo={handleAddTodo}/>
          <TodoItemList />
        </div>
      </Container>
    </>
    
  );
}
