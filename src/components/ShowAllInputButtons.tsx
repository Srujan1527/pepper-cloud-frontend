import React from "react";
import { InputType } from "../utils/types";

const ShowAllInputButtons = ({ setShowAllInputs }: any) => {
  function showInput(type: InputType, title: string, placeholder: string) {
    setShowAllInputs((prev: any) => [...prev, { type, title, placeholder }]);
  }

  return (
    <div className="flex mt-10  ">
      <button
        type="button"
        onClick={() => showInput(InputType.text, "title", "placeholder")}
        className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
      >
        TEXT
      </button>
      <button
        type="button"
        onClick={() => showInput(InputType.number, "title", "placeholder")}
        className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
      >
        NUMBER
      </button>
      <button
        type="button"
        onClick={() => showInput(InputType.email, "title", "placeholder")}
        className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
      >
        EMAIL
      </button>
      <button
        type="button"
        onClick={() => showInput(InputType.password, "title", "placeholder")}
        className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
      >
        PASSWORD
      </button>
      <button
        type="button"
        onClick={() => showInput(InputType.date, "title", "placeholder")}
        className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
      >
        DATE
      </button>
    </div>
  );
};

export default ShowAllInputButtons;
