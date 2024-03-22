import React, { useEffect, useState } from "react";

const Advancecounter = () => {
  const [count, setCount] = useState(0);
  const [savedValues, setSavedValues] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };

  const saveValue = () => {
    if (count != 0) {
      setSavedValues([...savedValues, count]);
    }
    if (saveValue === 0) {
      setSavedValues([...savedValues, count]);
    }
    setCount(0);
  };
  const reset = () => {
    setCount(0);
    setSavedValues([]);
  };
  return (
    <div className=" min-h-screen flex">
      <div className="max-w-[1040px] mx-auto px-3 flex justify-center items-center ">
        <div className="bg-[#3c60ff] shadow-[0_0_12px_0_#000] p-7 max-w-[500px] mx-auto rounded-3xl text-center flex flex-col items-center mt-[122px]">
          <p className=" text-3xl text-[#ffffff]">advance counter app</p>
          <p className=" text-white text-5xl">{count}</p>
          <div className="flex items-center mx-auto gap-4 mt-5">
            <button
              onClick={increment}
              className="p-3 hover:bg-transparent border-[#101e48] border-2 duration-300 bg-[#101e48] rounded-2xl text-white font-semibold font-serif  text-xl"
            >
              ADD
            </button>
            <button
              onClick={reset}
              className="p-3 hover:bg-transparent border-[#101e48] border-2 duration-300 bg-[#101e48] rounded-2xl text-white font-semibold font-serif  text-xl"
            >
              RESET
            </button>
            <button
              onClick={saveValue}
              className="p-3 hover:bg-transparent border-[#101e48] border-2 duration-300 bg-[#101e48] rounded-2xl text-white font-semibold font-serif  text-xl"
            >
              SAVE
            </button>
          </div>
          <p className=" text-white text-5xl pt-5">{savedValues.join(",")}</p>
        </div>
      </div>
    </div>
  );
};

export default Advancecounter;
