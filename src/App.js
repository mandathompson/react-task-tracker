import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Go to DMV',
        day: '9th April at 10:30',
        reminder: true
      },
      {
        id: 2,
        text: 'Drink Heavily',
        day: '9th April at 10:30',
        reminder: true
      },
    ])

  //Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)
    )
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;


//https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=60s  Tutorial Link