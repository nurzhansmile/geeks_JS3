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
import Pagination from './components/pagination/Pagination';
import PokemonPage from './page/pokemonPage/PokemonPage';


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
    const [ tasks, setTasks ] = useState([]);
    const [ originalTasks, setOriginalTasks ] = useState(tasks)

    const handleAdd = () => {
        setTasks(prev=>[...prev,
                {
                    id: tasks.length === 0 ? 1 : tasks[tasks.length-1].id +1,
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
        tasks.map(task => {
            if (task.id === editTodo.id )
                return task.title= editTodo.title
        })
        setTasks(tasks)
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
    }, [tasks]);

    // useEffect(()=>{
    //     localStorage.setItem('user', 'Bakyt')
    //     localStorage.setItem('age', 18)
    //     console.log(localStorage.getItem('user'), 'user');
    //     localStorage.removeItem('user')
    // }, [])

    // useEffect(() => {
    //     const myLocalList = JSON.parse(localStorage.getItem('tasks'))
    //     if (myLocalList === null) {
    //         return localStorage.setItem('tasks', JSON.stringify(tasks))
    //     }
    //     if (myLocalList.length !== 0 ) {
    //         setTasks(myLocalList)
    //     }
    // }, []);
    //
    // useEffect(()=>{
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks])

    const handleClear = () =>{
        localStorage.setItem('tasks', JSON.stringify([]))
        setTasks([])
    }

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.org/users')
        const users = await (data.json())
        setUsers(users)
    }

    const [filterOption, setFilterOption] = useState('all')
    const handleFilterChange = (event) => {
        setFilterOption(event.target.value)
    }

    const filterTasks = tasks.filter(task => {
        switch (filterOption) {
            case 'completed' :
                return task.completed;
            case 'notCompleted' :
                return !task.completed;
            default:
                return true
        }
    })

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const getApi = async (endpoint) => {
        const data = await fetch(BASE_URL+endpoint)
        const info  = await (data.json())
        setTasks(info)
        console.log(info);
    }

    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(10)
    console.log(limit,'limit');
    const handleLimitChange = (event) => {
        setLimit(event.target.value)
    }

    const handleNext =  () => {
        setOffset(prev=>prev+limit)
    }
    const handlePrev =  () => {
        setOffset(prev=>prev-limit)
    }

    const page = Math.floor(offset/limit)+1

    useEffect(()=>{
        getApi(`todos?_limit=${limit}&_start=${offset}`)
    }, [offset, limit])

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
            <select value={filterOption} onChange={handleFilterChange}>
                <option value="all">Все таски</option>
                <option value="completed">Выполненные</option>
                <option value="notCompleted">Не выполненные</option>
            </select>
            <button onClick={handleShow}>открыть</button>
            <button onClick={handleClear}>очистить</button>
            <button onClick={getUsers}>Получить users</button>
            <Input
                placeholder={'искать'}
                onChangeInput={handleSearch}
            />
            <input type="number" value={limit} onChange={handleLimitChange}/>
            {/*<div className='wrapper'></div>*/}

            {/*<CountPage/>*/}
            {/*<InputShow input={input}/>*/}
            {/*<Input placeholder={'напишите'} onChangeInput={onChangeInput}/>*/}
            {/*<ToDoList*/}
            {/*    tasks={filterTasks}*/}
            {/*    handleDelete={handleDelete}*/}
            {/*    handleDone={handleDone}*/}
            {/*    handleEdit={handleEdit}*/}
            {/*/>*/}
            {/*<Pagination handleNext={handleNext} page={page} handlePrev={handlePrev}/>*/}
            {/*<Users users={users}/>*/}
            <PokemonPage/>
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
