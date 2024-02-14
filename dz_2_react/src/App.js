import './App.css';
import  List from "./Components/List/List"

function App() {

    const tasks = [
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }

]

  return (
    <div className="App">
    <List tasks={tasks}/>
    </div>
  );
}

export default App;
