import React from 'react';


function TaskInput() {
  return (
    <div>
      <input
      className='wd-100'
      type="text"
      placeholder="Enter a Task"
      />
      <button
      className='btn-primary'
      >Add</button>
    </div>
  );
}

export default TaskInput;