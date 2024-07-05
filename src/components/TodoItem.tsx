import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITodosItem, TChangeMethod } from '@/types/todos';

interface IProps {
    todo: ITodosItem;
    changeTodo: (type: TChangeMethod, todo: ITodosItem) => void;
}

const TodoItem = ({ todo, changeTodo,  }: IProps) => {
  const {title, completed} = todo;

  return (
    <ListItem>
      <Checkbox checked={completed} onChange={() => changeTodo('update', {...todo, completed: !completed})} />
      <ListItemText primary={title} sx={completed ? {textDecoration: 'line-through'} : {}}/>
      <IconButton edge="end" aria-label="delete" onClick={() => changeTodo('delete', todo)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;