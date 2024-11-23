import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => setEditingTask(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default TaskList;
