import * as React from 'react';
import { Button, TextField, Grid, useTheme } from '@material-ui/core';

interface TodoAddProps {
  addTodo: (text: string) => void;
}

function TodoAdd({ addTodo }: TodoAddProps) {
  const theme = useTheme();
  const [input, setInput] = React.useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <Grid
      container
      spacing={3}
      style={{
        paddingTop: '16px',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid item xs={10}>
        <TextField
          fullWidth
          placeholder="New todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" fullWidth onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
}

export default TodoAdd;
