"use client";
import { formatDate } from "@/lib/entities";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { LuPencilLine } from "react-icons/lu";
import { TbX } from "react-icons/tb";

const WhiteList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [supply, setSupply] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask && startTime) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          name: newTask,
          startdate: startTime,
          supply,
          endDate: endTime,
        },
      ]);
      setNewTask("");
      setStartTime("");
      setEndTime("");
      setSupply("");
      setIsOpen(false);
    }
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setNewTask(taskToEdit.name);
      setStartTime(taskToEdit.startdate);
      setEndTime(taskToEdit.endDate);
      setSupply(taskToEdit.supply);
      setIsEditing(true);
      setCurrentTaskId(id);
      setIsOpen(true);
    }
  };

  const handleSaveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTaskId
          ? {
              ...task,
              name: newTask,
              startdate: startTime,
              endDate: endTime,
              supply,
            }
          : task
      )
    );
    setIsOpen(false)
    setIsEditing(false);
    setNewTask("");
    setStartTime("");
    setEndTime("");
    setSupply("");
    setCurrentTaskId(null);
  };

  const dateInputRef = useRef(null);
  const endInputRef = useRef(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Show the date picker panel
    }
  };
  const handleEndClick = () => {
    if (endInputRef.current) {
      endInputRef.current.showPicker(); // Show the date picker panel
    }
  };

  return (
    <div className="p-4  text-white">
      <h1 className="text-sm opacity-50 mb-4">Whitelist settings</h1>
      <div className="">
        {!tasks.length ? (
          <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-2 flex justify-between items-center">
            <div className="text-md text-white">
              No data Added yet
            </div>
          </div>
        ) : null}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white bg-opacity-10 p-4 rounded-lg mb-2 flex justify-between items-center"
          >
            <div>
              <div className="text-lg font-semibold">{task.name}</div>
              <div className="text-sm text-gray-400">
                {formatDate(task.startdate)}
              </div>
            </div>
            <LuPencilLine
              onClick={() => handleEditTask(task.id)}
              className="cursor-pointer text-pink-500"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button onClick={()=> setIsOpen(true)} className="text-pink-500 ">Add +</button>
        </div>
      </div>
      {isOpen && (
        <div
          className={
            "h-screen fixed bg-[rgba(0,0,0,0.2)] top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center"
          }
        >
          <div
            className={`${
              isOpen ? " translate-y-0" : " translate-y-[-1000%]"
            } transition-transform duration-200 bg-[#0a0511] shadow gap-4 py-5 flex px-7 justify-center flex-col overflow-y-scroll rounded-2xl max-w-[450px] w-full h-[450px]`}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-[20px]">Add mint</h1>
              <span onClick={() => setIsOpen(false)}>
                <TbX />
              </span>
            </div>
            <div className="flex flex-col mt-4">
              <div className="relative w-full flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="e.g Public mint"
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
              </div>
              <div className="relative w-full flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="">
                  Supply
                </label>
                <input
                  type="tel"
                  value={supply}
                  onChange={(e) => setSupply(e.target.value)}
                  placeholder="0"
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
              </div>
              <div className="relative w-full flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="start_date">
                  Start date
                </label>
                <input
                  type="date"
                  ref={dateInputRef}
                  id="start_date"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  onFocus={(e) => e.target.blur()}
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
                <Image
                  onClick={handleIconClick}
                  className="absolute right-3 top-10 text-pink-500 cursor-pointer"
                  src={"/assets/dashboard/calendar-03.svg"}
                  alt="logo"
                  height={20}
                  width={20}
                  priority
                />
              </div>
              <div className="relative w-full flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="start_date">
                  End date
                </label>
                <input
                  type="date"
                  ref={endInputRef}
                  id="start_date"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  onFocus={(e) => e.target.blur()}
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
                <Image
                  onClick={handleEndClick}
                  className="absolute right-3 top-10 text-pink-500 cursor-pointer"
                  src={"/assets/dashboard/calendar-03.svg"}
                  alt="logo"
                  height={20}
                  width={20}
                  priority
                />
              </div>
              {isEditing ? (
                <div className="flex mt-5 justify-end">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-pink-500 py-2 px-8 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex mt-5 justify-end">
                  <button
                    onClick={handleAddTask}
                    className="bg-pink-500 py-2 px-8 rounded-lg"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        input[type="date"]::-webkit-datetime-edit-text,
        input[type="date"]::-webkit-datetime-edit-month-field,
        input[type="date"]::-webkit-datetime-edit-day-field,
        input[type="date"]::-webkit-datetime-edit-year-field {
          color: #f72585;
        }
        input[type="date"]:focus {
          outline: none;
          border-color: #f72585;
        }
        input[type="date"]::placeholder {
          color: #f72585;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WhiteList;
