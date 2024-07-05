import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { ITodosItem, TChangeMethod } from '@/types/todos';

interface IProps {
    todos: ITodosItem[]
    changeTodo: (type: TChangeMethod, todo: ITodosItem) => void;
}

const TodoItemList = ({ todos, changeTodo }: IProps) => {
  const sortedTodos = todos.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
  
  return (
    <List>
      {sortedTodos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} changeTodo={changeTodo}/>
      ))}
    </List>
  );
};

export default TodoItemList;
