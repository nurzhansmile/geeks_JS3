import { useState } from "react";
import TodoInp from "../TodoInp/TodoInp";
import TodoList from "../TodoList/TodoList";

import styles from "./AllTodo.module.css";
import SearchInp from "../searchInp/SearchInp";

const AllTodo = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "salam",
    },
    {
      id: 2,
      title: "Alekum",
    },
    {
      id: 3,
      title: "Nurzhan",
    },
  ]);

  return (
    <div className={styles.main}>
      <SearchInp todo={todo} setTodo={setTodo}/>
      <TodoInp todo={todo} setTodo={setTodo} />
      <TodoList list={todo} setTodo={setTodo} />
    </div>
  );
};

export default AllTodo;
