import React, { useState } from "react";

const ToDo = () => {
  const [input, setinput] = useState("");
  const [task, settask] = useState([]);
  const inputvalue = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  const setvalue = () => {
    settask([...task, input]);
  };
  function removecart(index) {
    const leftcart = [...task];
    leftcart.splice(index, 1);
    settask(leftcart);
  }
  return (
    <div className=" min-h-screen bg-red-500 flex justify-center items-center ">
      <div className="w-[500px] h-[500px]  mx-auto p-6  bg-white rounded-3xl ">
        <h2 className=" text-center text-3xl">TODAY TASK</h2>
        <div className=" flex items-center gap-2 mt-5">
          <input
            type="text"
            onChange={inputvalue}
            value={input}
            className="w-full p-2 rounded-3xl border-[#f1e349] border-2 outline-0"
          />
          <input
            type="submit"
            onClick={setvalue}
            className=" bg-blue-700 p-2 rounded-3xl cursor-pointer hover:bg-transparent border-2 border-blue-700 duration-300"
          />
        </div>
        <ol className=" list-decimal p-6 ">
          {task.map((e, index) => (
            <div>
              <li key={index} className=" list-item my-3">
                <ul className=" flex justify-between items-center">
                  <span className=" block">{e}</span>
                  <span
                    href="#"
                    onClick={() => removecart(index)}
                    className=" block text-red-500 cursor-pointer"
                  >
                    deleet
                  </span>
                </ul>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDo;
