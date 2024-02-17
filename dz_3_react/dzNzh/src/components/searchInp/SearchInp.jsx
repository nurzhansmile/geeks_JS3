import { useState } from "react";
import styles from "./SearchInp.module.css";

const SearchInp = ({ todo, setTodo }) => {
  const [text, setText] = useState("");
  let word;

  const searchFunc = () => {
    // Создаем новый массив, который будет содержать только элементы, удовлетворяющие условию поиска
    const newTodo = todo.filter((item) => item.title.includes(text));
  
    // Устанавливаем новый массив в состояние todo
    setTodo(newTodo);
  };

  return (
    <div className={styles.main}>
      <div className={styles.contentDiv}>
        <h2>Найдите нужную задачу</h2>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            searchFunc();
          }}
          placeholder="Найди"
          type="text"
          className={styles.inp}
        />
      </div>
    </div>
  );
};

export default SearchInp;
