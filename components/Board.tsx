"use client";
import { create } from "zustand";
import { useEffect } from "react";
import { useState } from "react";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";
import Column from "./Column";

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

const handleOnDragEnd = (result: DropResult) => {

}
  return(
    <DragDropContext onDragEnd={e => handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column" >
      {(provided) => 

        <div
        className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-3"
        {...provided.droppableProps}
        ref={provided.innerRef}
        >
          {Array.from(board.columns.entries()).map(([id, column], index) => (
            <Column
            key={id}
            id={id}
            todos={column.todos}
            index={index}
            
            />
          ))}
        </div>
        
      
      }
        

      </Droppable>
    </DragDropContext>
  )
};

export default Board;
