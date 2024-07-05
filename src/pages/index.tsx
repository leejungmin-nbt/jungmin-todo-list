import {TodoForm, TodoItemList} from '@/components';
import { addItem, deleteItem, getItems, updateItem } from '@/utils/api';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {ITodosItem, TChangeMethod} from '@/types/todos';


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

  const handleChangeItem = async(type: TChangeMethod, selectedTodo: ITodosItem) => {
    if(type === 'update') {
      const newTodo = await updateItem(selectedTodo);
      setTodos(todos.map((todo) => (todo.title === selectedTodo.title ? newTodo : todo)));

      return;
    }

    const newTodo = await deleteItem(selectedTodo)
    setTodos(newTodo);
  }

  //첫 todo 가져오기
  useEffect(() => {
    getTodos();  
  }, [])

  return (
    <>
      <Container>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <Typography variant='h4'>
            N___BT - 정민
          </Typography>
          <div style={{width: '100%', margin: '20px 0px'}}/>
          <TodoForm addTodo={handleAddTodo}/>
          <TodoItemList todos={todos} changeTodo={handleChangeItem} />
        </div>
      </Container>
    </>
    
  );
}
