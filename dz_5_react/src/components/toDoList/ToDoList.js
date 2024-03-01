import React, { useState, useEffect } from 'react';
import ToDo from '../toDo/ToDo';
import classes from './ToDoList.module.css';


const ToDoList = ({ tasks, handleDelete, handleDone, handleEdit, select }) => {
  const [currentEdit, setCurrentEdit] = useState()

  const [newTasks, setNewTasks] = useState(tasks)

  useEffect(() => {
    if (select === "all") {
      setNewTasks(tasks)
    }
    if (select === "comlited") {
      const complitedTasks = tasks.filter(item => item.completed !== false)
      setNewTasks(complitedTasks)
    }
    if (select === "notComplited") {
      const NotComplitedTasks = tasks.filter(item => item.completed === false)
      setNewTasks(NotComplitedTasks)
    }

  }, [select])


  return (
    <ul className={classes.list}>
      {newTasks.map(todo =>
        <ToDo
          key={todo.id}
          task={todo}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          handleCurrentEdit={setCurrentEdit}
          isEdit={currentEdit === todo.id}
        />)}
    </ul>
  );
};

export default ToDoList;
