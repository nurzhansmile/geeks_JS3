import React, { useState } from 'react';
import classes from './ToDo.module.css';
import { Button } from '../button/Button';
import Input from '../input/Input';


const ToDo = ({ task, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit }) => {
  console.log(isEdit);
  const [input, setInput] = useState(task.title)
  console.log(input, 'inputinput');
  if (isEdit) {
    return <div>
      <input
        type='text'
        value={input}
        onChange={event => setInput(event.target.value)} />
      <Button
        onClick={
          () => {
            handleEdit({
              ...task, title: input
            })
            handleCurrentEdit(!isEdit)
          }
        }
        text={'Save'} />
      <Button
        onClick={() => handleCurrentEdit(!isEdit)}

        text={'Cancel'} />
    </div>
  }
  return (
    <li className={task.completed ? classes.taskComplited : classes.task}>
      <p>id: {task.id}</p>
      <p>title: {task.title}</p>
      <Button onClick={() => handleCurrentEdit(task.id)} text={'Edit'} />
      <Button onClick={() => handleDone(task.id)} text={'Done'} />
      <Button onClick={() => handleDelete(task.id)} text={'delete'} />
    </li>
  );
};

export default ToDo;
