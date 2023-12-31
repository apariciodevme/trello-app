import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const Column = ({ id, todos, index }: Props) => {
  return <Draggable draggableId={id} index={index}>
    {(provided) => 
    <div
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}
    >
    
    
    </div>}</Draggable>;
};

export default Column;
