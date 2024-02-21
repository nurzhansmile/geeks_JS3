import './App.css';
import { Button } from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/Example';
import Header from './components/header/Header';
import NewComponent from './components/newComponent/NewComponent';
import Modal from './components/modal/Modal';
import React, { useEffect, useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import ToDoList from './components/toDoList/ToDoList';


function App() {
    const navbar = [ 'Главная', 'О нас', 'Контакты' ];

    const [ show, setShow ] = useState(false);

    const [ input, setInput ] = useState('');
    const [ searchInput, setSearchInput ] = useState('');


    const onChangeInput = (event) => {
        setInput(event.target.value);
    };


    const handleShow = () => {
        setShow(!show);
    };
    const [ tasks, setTasks ] = useState([
            {
                id: 1,
                title: 'coding',
                completed: false
            },
            {
                id: 2,
                title: 'eat',
                completed: false
            },
            {
                id: 3,
                title: 'sleep',
                completed: false
            }
        ]
    );
    console.table(tasks);
    const [ originalTasks, setOriginalTasks ] = useState(tasks)

    const handleAdd = () => {
        setTasks(prev=>[...prev,
            {
                id: tasks.length + 1,
                title: input,
                completed: false,
            }
        ]
        );
    };

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task=> {
            if(task.id===id) {
                return task.completed = !task.completed
            }
            return tasks
        })
        setTasks([...tasks])
    }

    const handleDelete = (id) => {
        const deleted = tasks.filter(task=> task.id!==id)
        setTasks(deleted)
    }
    const handleEdit = (editTodo) => {
        let newTasks = tasks.filter((item=>item.id!==editTodo.id))
        let arrayForm = [...newTasks, editTodo]
        setTasks(arrayForm)
        console.log(editTodo);
    }

    const a= [1,2,3]
    const b = [4,5,6]
    const c = [...a,...b]

    const handleSearch  = (event) => {
        const inputValue = event.target.value
        setSearchInput(inputValue);
        if (inputValue==='')
        {
            setTasks(originalTasks)
        } else {
            const filteredTasks = tasks.filter(task=> task.title.toLowerCase().includes(inputValue.toLowerCase()))
            setTasks(filteredTasks)
        }
    };

    useEffect(() => {
        console.log('useEffect')
    }, [tasks]);

    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                    <Input
                        placeholder={'Добавить таск'}
                        onChangeInput={onChangeInput}
                    />
                    <Button onClick={handleAdd} text={'добавить'}/>
                </Modal>
            }
            <button onClick={handleShow}>открыть</button>
            <Input
              placeholder={'искать'}
              onChangeInput={handleSearch}
            />
            {/*<div className='wrapper'></div>*/}

            {/*<CountPage/>*/}
            {/*<InputShow input={input}/>*/}
            {/*<Input placeholder={'напишите'} onChangeInput={onChangeInput}/>*/}
            <ToDoList
              tasks={tasks}
              handleDelete={handleDelete}
              handleDone={handleDone}
              handleEdit={handleEdit}
            />
        </>

    );
}


export default App;


// const sum = (a,b) => a+b
//
// sum(5,9)

// const user = {
//     name: 'Bakyt',
//     age: 18
// }
//
// user.name
