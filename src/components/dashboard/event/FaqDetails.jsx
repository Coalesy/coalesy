import React from "react";
import { LuPencilLine } from "react-icons/lu";

const FaqDetails = ({ tasks, handleNext, setOpenListedData, handleEditTask }) => {
  return (
    <div>
      {!tasks.length ? (
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-2 flex justify-between items-center">
          <div className="text-md text-white">No data Added yet</div>
        </div>
      ) : null}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white bg-opacity-10 p-4 rounded-lg mb-2 flex justify-between items-center"
        >
          <div>
            <div className="text-lg font-semibold">{task.question}</div>
            <div className="text-sm text-gray-400">{task.answer}</div>
          </div>
          <LuPencilLine
            onClick={() => handleEditTask(task.id)}
            className="cursor-pointer text-pink-500"
          />
        </div>
      ))}

      <div className="flex gap-5 mt-5 justify-end">
        <button
          onClick={() => setOpenListedData(false)}
          className="text-white text-sm bg-white bg-opacity-10 py-2 px-8 rounded"
        >
          Add more
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FaqDetails;
