import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim() !== '') {
            onAddTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
                 <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a task..."
                className="flex-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover hover:bg-blue-500 focus:outline-none">Add</button>
            </div>
           
        </form>
    );
};

export default TaskInput;