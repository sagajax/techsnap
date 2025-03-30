import { Draggable } from 'react-beautiful-dnd';
const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-600',
      medium: 'bg-yellow-100 text-yellow-600',
      low: 'bg-green-100 text-green-600',
    };
    return colors[priority] || colors.medium;
  };
  
export const Task = ({ task, index, onIssueClick, compact = false }) => (
  <Draggable draggableId={`${task.id}-${index}`} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`bg-white rounded shadow-sm hover:shadow-md transition-shadow ${
          compact ? 'p-1.5 mb-1' : 'p-3 mb-2'
        }`}
      >
        <div className="flex items-center justify-between mb-1">
          <span className={`text-xs font-medium text-gray-500 ${compact && 'truncate max-w-[80px]'}`}>
            {task.label}
          </span>
          <span className={`text-xs rounded-full ${compact ? 'px-1.5 py-0.5' : 'px-2 py-1'} ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
        <h3 className={`font-medium line-clamp-1 ${compact ? 'text-xs mb-1' : 'text-sm mb-2'}`}>
          {task.title}
        </h3>
        <div className="flex items-center justify-between">
          <button 
            className={`text-gray-600 hover:bg-green-600 hover:text-white rounded ${
              compact ? 'text-[10px] px-1 py-0.5' : 'text-xs p-1 rounded-xl'
            }`}
            onClick={() => onIssueClick(task.id)}
          >
            {task.id}
          </button>
          <div className={`flex items-center ${compact ? 'space-x-1' : 'space-x-2'}`}>
            <span className={`text-xs rounded-full ${
              compact ? 'bg-gray-100 text-[10px] px-1.5 py-0.5 truncate max-w-[60px]' : 'bg-gray-200 px-2 py-1'
            }`}>
              {task.assignee}
            </span>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);




