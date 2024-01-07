import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FormObj, InputObj, InputType } from "../utils/types";
import ShowInput from "./ShowInput";
import ShowTitle from "./ShowTitle";
import ShowAllInputButtons from "./ShowAllInputButtons";
import AddInputTitleAndPlaceholder from "./AddInputTitleAndPlaceholder";
import AddNameToForm from "./AddNameToForm";

const CreateForm = () => {
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

    const existingFormIndex = form.findIndex(
      (formObj: any) => formObj.formTitle === title
    );

    if (existingFormIndex !== -1) {
      setForm((prev: any) => {
        const updatedForm = [...prev];
        updatedForm[existingFormIndex] = { ...allFormInputs };
        return updatedForm;
      });
    } else {
      setForm((prev: any) => [...prev, { ...allFormInputs }]);
    }

    setShowAllInputs([]);
  };

  const uploadForm = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    const response = await fetch("http://localhost:8000/form/upload", options);

    if (response.ok) {
      await response.json();

      navigate("/");
    }
  };

  return (
    <div className=" h-screen p-5 flex flex-col justify-start items-center ">
      <div className=" flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl mt-10 "> Create New Form</h1>
        </div>
      </div>
      <div id="formContainer" className="flex justify-center mt-10 w-full">
        <form
          id="createForm"
          onSubmit={handleSubmit}
          className="border-2 p-5 flex flex-col justify-center items-center w-[70%]"
        >
          <ShowTitle
            title={title}
            isTitleEditButtonClicked={isTitleEditButtonClicked}
            setIsTitleEditButtonClicked={setIsTitleEditButtonClicked}
          />
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
          CREATE FORM
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
