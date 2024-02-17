import styles from "./TodoList.module.css";

const TodoList = ({ list, setTodo }) => {
  const deleteTodo = (id) => {
    const newTodo = list.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {list.map((item) => (
          <div key={item.id} className={styles.todoIten}>
            <p>{item.title}</p>
            <button
              onClick={() => deleteTodo(item.id)}
              className={styles.todoItemBtn}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
