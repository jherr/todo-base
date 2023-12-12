import '../../src/App.css';
import * as React from 'react';
import {
  Button,
  TextField,
  Checkbox,
  Typography,
  Grid,
  useTheme,
} from '@material-ui/core';

interface Todo {
  id: number;
  text: string;
}

interface TodoListItemsProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

function TodoListItems({ todos, removeTodo }: TodoListItemsProps) {
  const theme = useTheme();

  return (
    <>
      {todos.map((todo) => (
        <Grid
          container
          spacing={3}
          style={{
            paddingTop: '16px',
            backgroundColor: theme.palette.background.default,
          }}
          key={todo.id}
        >
          <Grid item xs={1}>
            <Checkbox />
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth value={todo.text} />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

function TodoList({ todos, removeTodo }: TodoListItemsProps) {
  return (
    <>
      <Typography variant="h4" className="listcss">
        Todo List
      </Typography>
      <TodoListItems todos={todos} removeTodo={removeTodo} />
    </>
  );
}

export default TodoList;
