"use client";
import { useState } from "react";
import useThemeContext from "../context/ThemeProvider";

import AddTask from "../components/AddTask";
import Task from "../components/Task";
import Header from "./Header";
import Footer from "./Footer";

const Toolbar = ({ data }) => {
  const { theme } = useThemeContext();
  const [sort, setSort] = useState(false);

  const dataFilterDone = data.filter((done) => done.isDone === true);

  const dataFilterUndone = data.filter((undone) => undone.isDone === false);

  return (
    <div className={`${theme ? "bg-white" : "bg-black"}`}>
      <Header sort={sort} setSort={setSort} />
      <div
        className={`min-h-screen flex flex-col font-comic my-0
      mx-auto pl-5 w-3/5 ${theme ? "bg-white" : "bg-black"}`}
      >
        <div>
          <p className={`mb-4 ${theme ? "text-black" : "text-white"}`}>
            YOU HAVE{" "}
            <span className="font-bold text-orange-400">{data.length}</span>{" "}
            TASKS IN YOUR TODO LIST {"   "}
            <span className="font-bold text-orange-400">
              {dataFilterDone.length}
            </span>{" "}
            OF THEM ARE<span className="font-bold text-orange-400"> DONE </span>
            AND{" "}
            <span className="font-bold text-orange-400">
              {dataFilterUndone.length}
            </span>{" "}
            IS <span className="font-bold text-orange-400">TO DO</span>.
          </p>
        </div>
        {sort ? (
          <div className="gap-x-3">
            <div className="flex ">
              <div>
                <h2
                  className={`text-3xl  mb-4  ${
                    theme ? "text-black" : "text-white"
                  }`}
                >
                  Task to do
                </h2>
                {dataFilterUndone.length === 0 && (
                  <p className="text-l text-gray-500">No task to do...</p>
                )}
              </div>
            </div>
            {dataFilterUndone.map((task, index) => {
              return (
                <div key={index}>
                  <Task task={task} />
                </div>
              );
            })}
            <div>
              <h2
                className={`text-3xl mb-4 mt-2 ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                Task done
              </h2>
              {dataFilterDone.length === 0 && (
                <p className="text-l text-gray-500">No task done...</p>
              )}
            </div>
            {dataFilterDone.map((task, index) => {
              return (
                <div key={index}>
                  <Task task={task} />
                </div>
              );
            })}{" "}
          </div>
        ) : (
          <div className="gap-x-3">
            <div className="flex justify-between">
              <div>
                {" "}
                <h2
                  className={`text-3xl mb-4 ${
                    theme ? "text-black" : "text-white"
                  }`}
                >
                  All tasks
                </h2>
                {data.length === 0 && (
                  <p className="text-l text-gray-500">No task to do...</p>
                )}
              </div>
            </div>
            {data.map((task, index) => {
              return (
                <div key={index}>
                  <Task task={task} />
                </div>
              );
            })}{" "}
          </div>
        )}
        <AddTask />
      </div>
      <Footer />
    </div>
  );
};
export default Toolbar;
