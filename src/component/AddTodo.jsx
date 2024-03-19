import React, { useState } from "react";
import { Box, Button, Input, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
const BoxStyle = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: "10px",
});
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  };
  const handleChange = () => {};
  return (
    <BoxStyle>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Add Your Todo Here"
          // onChange={handleChange}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" style={{ marginLeft: "20px" }} type="submit">
          Add
        </Button>
      </form>
    </BoxStyle>
  );
};

export default AddTodo;
