import React, { useState, useEffect } from 'react';
import "./App.css"
import { v4 as uuidv4 } from 'uuid'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [Input, setInput] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const Tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(Tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      id: uuidv4(), 
      title: Input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSave = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>
        <span className="second-title">Todo List App</span>
      </h1>
      <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
        <input
          className="add-task"
          type="text"
          placeholder="Add new task ..."
          value={Input}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <div className="todo">
        {tasks.map((task) => (
          <div key={task.id} className="todo-item">
            <input
              className="checkbox"
              type="checkbox"
              id={`isCompleted_${task.id}`}
              checked={task.completed}
              onChange={() => handleComplete(task.id)}
            />
            <div className={`todo-text ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </div>
            <div className="todo-actions">
              <button
                className="submit-edits"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="submit-edits"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingTask && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Task</h2>
            <input
            className="edit-task"
              type="text"
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({ ...editingTask, title: e.target.value })
              }
            />
            <button className='edit-button' onClick={() => handleSave(editingTask)}>Save</button>
            <button className='cnsl-button' onClick={() => setEditingTask(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
