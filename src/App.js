import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';
import { Box, styled } from '@mui/material';
import Todo from './component/Todo';
const BoxStyle= styled(Box)({
  width:"50%",
  margin:"auto"
})
function App() {
  return (
    <BoxStyle>
    <h1>Learn ReduxToolkit</h1>
    <AddTodo />
    <Todo />
    </BoxStyle>
  );
}

export default App;
