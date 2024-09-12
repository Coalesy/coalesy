"use client";
import React, { useState } from "react";
import FaqDetails from "./FaqDetails";

const EventFaq = ({ handleChangeStep }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [openListedData, setOpenListedData] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    handleChangeStep();
  };

  const handleAddTask = () => {
    if (formData.answer && formData.question) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          question: formData.question,
          answer: formData.answer,
        },
      ]);
      setFormData({ ...formData, question: "", answer: "" });
      setOpenListedData(true);
    }
  };
  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setFormData({
        ...formData,
        question: taskToEdit.question,
        answer: taskToEdit.answer,
      });
      setIsEditing(true);
      setCurrentTaskId(id);
      setOpenListedData(false);
    }
  };

  const handleSaveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTaskId
          ? {
              ...task,
              question: formData.question,
              answer: formData.answer,
            }
          : task
      )
    );
    setIsEditing(false);
    setCurrentTaskId(null);
    setFormData({ ...formData, question: "", answer: "" });
    setOpenListedData(true);
  };

  return (
    <div className="">
      {openListedData ? (
        <div className="">
          <FaqDetails
            tasks={tasks}
            setOpenListedData={setOpenListedData}
            handleNext={handleNext}
            handleEditTask={handleEditTask}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="relative w-full flex flex-col gap-2">
            <label className="text-sm opacity-70" htmlFor="">
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              placeholder="When is Solana launching their solidity program?"
              value={formData.question}
              onChange={handleChange}
              className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
            />
          </div>
          <div className="relative w-full flex flex-col gap-2">
            <label className="text-sm opacity-70" htmlFor="">
              Answer
            </label>
            <textarea
              type="text"
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="Introducing Solana foundation in most advance TXN system booster."
              className="bg-white w-full h-[83px] bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
            />
          </div>
          <div className="flex mt-5 justify-end">
            {isEditing ? (
              <button
                onClick={handleSaveEdit}
                className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleAddTask}
                className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFaq;
