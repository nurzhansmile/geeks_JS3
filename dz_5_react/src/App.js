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
import Users from './page/users/Users';


function App() {
    const navbar = ['Главная', 'О нас', 'Контакты'];

    const [show, setShow] = useState(false);

    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState('');


    const onChangeInput = (event) => {
        setInput(event.target.value);
    };


    const handleShow = () => {
        setShow(!show);
    };
    const [tasks, setTasks] = useState([]);
    console.table(tasks, 'tasks+++++++++++++++');
    const [originalTasks, setOriginalTasks] = useState(tasks)
    const [selectClick, setSelectClick] = useState("all")
    // const [selectTask, setSelectTask] = useState(tasks)  

    const handleAdd = () => {
        setTasks(prev => [...prev,
        {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            title: input,
            completed: false,
        }
        ]
        );
    };

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed
            }
            return tasks
        })
        setTasks([...tasks])
    }

    const handleDelete = (id) => {
        const deleted = tasks.filter(task => task.id !== id)
        setTasks(deleted)
    }
    const handleEdit = (editTodo) => {
        tasks.map(task => {
            if (task.id === editTodo.id)
                return task.title = editTodo.title
        })
        setTasks(tasks)
    }

    const a = [1, 2, 3]
    const b = [4, 5, 6]
    const c = [...a, ...b]

    const handleSearch = (event) => {
        const inputValue = event.target.value
        setSearchInput(inputValue);
        if (inputValue === '') {
            setTasks(originalTasks)
        } else {
            const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(inputValue.toLowerCase()))
            setTasks(filteredTasks)
        }
    };

    const handleClearAll = () => {
        setTasks([])
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    

    useEffect(() => {
        console.log('useEffect')
    }, [tasks]);

    // useEffect(()=>{
    //     localStorage.setItem('user', 'Bakyt')
    //     localStorage.setItem('age', 18)
    //     console.log(localStorage.getItem('user'), 'user');
    //     localStorage.removeItem('user')
    // }, [])

    useEffect(() => {
        const myLocalList = JSON.parse(localStorage.getItem('tasks'))
        if (myLocalList === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalList.length !== 0) {
            setTasks(myLocalList)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.org/users')
        const users = await (data.json())
        setUsers(users)
    }

    




    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                    <Input
                        placeholder={'Добавить таск'}
                        onChangeInput={onChangeInput}
                    />
                    <Button onClick={handleAdd} text={'добавить'} />
                </Modal>
            }
            <button onClick={handleShow}>открыть</button>
            <button onClick={getUsers}>Получить users</button>
            <button onClick={handleClearAll}>Очистить</button>
            <select defaultValue="all" onClick={(e)=>{
                setSelectClick(e.target.value)
            }}>
                <option value="all">All</option>
                <option value="comlited">Complited</option>
                <option value="notComplited">NotComplited</option>
            </select>
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
                select={selectClick}
            />
            <h2 style={{marginTop:"20px"}}>Нажмите на select и список появится</h2>
            <Users users={users} />
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
