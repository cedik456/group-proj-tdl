import TaskItem from "./TaskItem";

function TaskList ({ tasks, onToggleComplete, onDelete }) {
    if(tasks.length === 0) {
        return (
        <p className="text-gray-500">
            No tasks yet. Add one above.
            </p>
        );
    }

    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <TaskItem 
                key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} 
                />
            ))}
        </div>
    );
};

export default TaskList;