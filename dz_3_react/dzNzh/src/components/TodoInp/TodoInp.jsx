import { useState } from "react";
import styles from "./TodoInp.module.css";

const TodoInp = ({ todo, setTodo }) => {
  const [text, setText] = useState("");

  const makeTodo = () => {
    setTodo([
      ...todo,
      {
        id: new Date().getDate(),
        title: text,
      },
    ]);
  };

  return (
    <div className={styles.main}>
      <h2>Создайте задачу</h2>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="createTodo"
        className={styles.inp}
        type="text"
      />
      <button onClick={makeTodo} className={styles.btn}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInp;
