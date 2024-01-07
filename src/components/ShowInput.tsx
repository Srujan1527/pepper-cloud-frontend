import React from "react";
import { InputObj } from "../utils/types";
import edit from "../svgs/edit.svg";
import deleteIcon from "../svgs/delete.svg";
const ShowInput = ({
  eachObj,
  setIsTitleEditButtonClicked,
  setCurrentType,
  setInputButtonClicked,
  inputButtonClicked,
  showAllInputs,
  setCurrentObj,
  setShowAllInputs,
}: any) => {
  const onClickDeleteButton = (type: string) => {
    const filteredInputs = showAllInputs.filter(
      (each: InputObj) => each.type !== type
    );

    setShowAllInputs([...filteredInputs]);
  };

  function onClickEditButton(type: string) {
    setIsTitleEditButtonClicked(false);
    setCurrentType(type);
    setInputButtonClicked(!inputButtonClicked);
    const filteredTypeObj = showAllInputs.filter(
      (each: InputObj) => each.type === type
    );

    setCurrentObj(filteredTypeObj[0]);
  }

  return (
    <div
      key={eachObj.type}
      className="flex justify-center items-center  shadow-md  p-2 mb-5"
    >
      <div className="relative mr-2 mt-5 ml-2">
        <input
          type="text"
          id={eachObj.type}
          name={eachObj.title}
          value={eachObj.title}
          readOnly
          className="border-b-2 py-1 focus:outline-none"
          placeholder={eachObj.title}
        />
      </div>
      <button
        type="button"
        className="mr-5 mt-5"
        onClick={() => onClickEditButton(eachObj.type)}
      >
        <img src={edit} alt="edit" />
      </button>

      <button
        className="mr-5 mt-5"
        onClick={() => onClickDeleteButton(eachObj.type)}
      >
        <img src={deleteIcon} alt="edit" />
      </button>
    </div>
  );
};

export default ShowInput;
