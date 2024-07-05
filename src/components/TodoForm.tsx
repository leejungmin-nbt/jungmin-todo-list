import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import {ITodosItem} from '@/types/todos';

interface IProps {
    addTodo: (values: ITodosItem) => void;
}

const TodoForm = ({ addTodo }: IProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        title,
        completed: false,
        createdAt: new Date()
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div style={{display: 'flex'}}>
            <TextField
                variant="outlined"
                label="New Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">Add</Button>
        </div>
    </form>
  );
};

export default TodoForm;