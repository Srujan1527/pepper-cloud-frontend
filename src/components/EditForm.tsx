import React, { useEffect, useState } from "react";

import edit from "../svgs/edit.svg";
import deleteIcon from "../svgs/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getForm } from "../utils/api";
import { FormObj, InputObj, InputType } from "../utils/types";
import ShowInput from "./ShowInput";
import ShowAllInputButtons from "./ShowAllInputButtons";
import AddNameToForm from "./AddNameToForm";
import AddInputTitleAndPlaceholder from "./AddInputTitleAndPlaceholder";

const EditForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("Untitled Form");
  const [isTitleEditButtonClicked, setIsTitleEditButtonClicked] =
    useState(false);
  const [inputButtonClicked, setInputButtonClicked] = useState(false);
  const [isAddInputButtonClicked, setIsAddInputButtonClicked] = useState(false);
  const [showAllInputs, setShowAllInputs] = useState<InputObj[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholderValue, setPlaceholderValue] = useState("");
  const [currentObj, setCurrentObj] = useState<any>(null);
  const [currentType, setCurrentType] = useState("text");

  const [form, setForm] = useState<FormObj[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const allFormInputs = {
      formTitle: title,
      allInputs: showAllInputs,
    };

    setForm([{ ...allFormInputs }]);
    setShowAllInputs([]);
  };

  const uploadForm = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    const response = await fetch("http://localhost:8000/form/update", options);

    if (response.ok) {
      const data = await response.json();

      navigate("/");
    }
  };

  const onClickDeleteButton = (type: string) => {
    const filteredInputs = showAllInputs.filter(
      (each: InputObj) => each.type !== type
    );

    setShowAllInputs([...filteredInputs]);
  };

  const id = params.id?.toString() as string;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const form = await getForm(id);

        if (form) {
          setForm(form[0]);
          setTitle(form[0].formTitle);
          setShowAllInputs(form[0].allInputs);
        }
      } catch (error: any) {
        console.error("Error fetching form:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" h-screen p-5 flex flex-col justify-start items-center ">
      <div className=" flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl mt-10 "> Edit Form</h1>
        </div>
      </div>
      <div id="formContainer" className="flex justify-center mt-10 w-full">
        <form
          id="createForm"
          onSubmit={handleSubmit}
          className="border-2 p-5 flex flex-col justify-center items-center w-[70%]"
        >
          <h1 className="text-3xl font-semibold mb-10 ">
            {title}
            <span>
              {" "}
              <button
                type="button"
                className="mr-5 mt-5 cursor-not-allowed "
                disabled
                onClick={() =>
                  setIsTitleEditButtonClicked(!isTitleEditButtonClicked)
                }
              >
                <img src={edit} alt="edit" />
              </button>
            </span>
          </h1>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2 mb-5">
              {showAllInputs.length > 0 &&
                showAllInputs.map((eachObj: InputObj) => (
                  <ShowInput
                    eachObj={eachObj}
                    setIsTitleEditButtonClicked={setIsTitleEditButtonClicked}
                    setCurrentType={setCurrentType}
                    setInputButtonClicked={setInputButtonClicked}
                    inputButtonClicked={inputButtonClicked}
                    showAllInputs={showAllInputs}
                    setCurrentObj={setCurrentObj}
                    setShowAllInputs={setShowAllInputs}
                  />
                ))}
            </div>
          </div>
          <button
            type="button"
            className="border-2 text-blue-500 font-medium rounded-md p-2 text-sm"
            onClick={() => setIsAddInputButtonClicked(!isAddInputButtonClicked)}
          >
            {" "}
            {isAddInputButtonClicked ? "CLOSE ADD INPUT" : "ADD INPUT"}
          </button>
          {isAddInputButtonClicked && (
            <ShowAllInputButtons setShowAllInputs={setShowAllInputs} />
          )}

          <button
            type="submit"
            className="border-2  mt-5 p-2 rounded-lg  bg-green-500 text-white font-semibold cursor-pointer"
          >
            SUBMIT
          </button>
        </form>
        <div
          id="formEditor"
          className="border-2 p-5 flex flex-col justify-start items-center w-[30%]"
        >
          <h1 className="text-3xl mt-10 "> Create New Form</h1>
          <p className="text-center text-xl mt-2">
            This is simple form builder
          </p>
          <div id="dynamicInputs " className="flex flex-col mt-2">
            {/* need to show when user clicks on button  */}
            {isTitleEditButtonClicked && (
              <AddNameToForm title={title} setTitle={setTitle} />
            )}

            {inputButtonClicked && (
              <AddInputTitleAndPlaceholder
                currentType={currentType}
                setInputValue={setInputValue}
                setCurrentObj={setCurrentObj}
                currentObj={currentObj}
                inputValue={inputValue}
                setPlaceholderValue={setPlaceholderValue}
                placeholderValue={placeholderValue}
                setInputButtonClicked={setInputButtonClicked}
                setShowAllInputs={setShowAllInputs}
              />
            )}
          </div>
        </div>
      </div>
      <div id="buttonContainer">
        <button
          className="border-2  mt-5 p-2 rounded-lg  bg-green-500 text-white"
          type="button"
          onClick={uploadForm}
        >
          SAVE FORM
        </button>
      </div>
    </div>
  );
};

export default EditForm;
