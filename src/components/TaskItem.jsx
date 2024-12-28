import { Trash2, CheckCircle, Circle} from "lucide-react";

function TaskItem ({ task, onToggleComplete, onDelete }){
    return (
        <div>
            <div>
                <button onClick={
                    () => onToggleComplete(task.id)
                } className="focus:outline-none">
                    {task.completed ? ( <CheckCircle className="text-green-500" size={20} /> ) : ( <Circle className="text-gray-400" size={20} /> )}
                </button>
                <span className={`${task.completed ? 'line-through text-gray-500' : ''}`} >
                    {task.text}
                </span>
            </div>

            <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-600 focus:outline-none" >
                <Trash2 size={20} />
            </button>
        </div>
    );
};

export default TaskItem;
