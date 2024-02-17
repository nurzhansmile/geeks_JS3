import './App.css';
import { Button } from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/Example';
import Header from './components/header/Header';
import NewComponent from './components/newComponent/NewComponent';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import TodoInp from './components/TodoInp/TodoInp';
import AllTodo from './components/AllTodo/AllTodo';


function App() {
    const navbar = ['Главная', 'О нас', 'Контакты'];

    const [show, setShow] = useState(false)

    const [input, setInput] = useState('')

    const onChangeInput = (event) => {
        console.log(event.target.value);
        setInput(event.target.value)
    }
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                </Modal>
            }
            <button onClick={handleShow}>открыть</button>
            {/*<div className='wrapper'></div>*/}

            <CountPage />
            <InputShow input={input} />
            <Input placeholder={'напишите'} onChangeInput={onChangeInput} />



            <AllTodo/>

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