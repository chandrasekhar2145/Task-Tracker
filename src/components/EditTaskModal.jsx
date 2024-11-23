import React, { useState } from 'react';

function EditTaskModal({ task, updateTask, onClose }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    onClose();
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedTask.title}
                  onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={updatedTask.description}
                  onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={updatedTask.dueDate}
                  onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  value={updatedTask.status}
                  onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.value })}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
