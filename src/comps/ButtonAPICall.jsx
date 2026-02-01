import React, {useState} from "react";
import axios from "axios";

const ButtonAPICall = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      setTodos(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={fetchTodos}>Fetch Todos</button>
      {todos.length > 0 && todos.map((todo) => (
        <div key={todo.id}>
          <p>#{todo.id} {todo.title}</p>
        </div>
      ))}
    </>
  );
};

export default ButtonAPICall;
