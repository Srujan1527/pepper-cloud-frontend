import React, { useEffect, useState } from "react";

import edit from "../svgs/edit.svg";
import deleteIcon from "../svgs/delete.svg";
import { useNavigate } from "react-router-dom";

enum InputType {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
  date = "date",
}

interface InputObj {
  type: InputType;
  title: string;
  placeholder: string;
}

interface FormObj {
  formTitle: string;
  allInputs: InputObj[];
}

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

  function showInput(type: InputType, title: string, placeholder: string) {
    setShowAllInputs((prev) => [...prev, { type, title, placeholder }]);
  }

  function onClickEditButton(type: string) {
    setIsTitleEditButtonClicked(false);
    setCurrentType(type);
    setInputButtonClicked(!inputButtonClicked);
    const filteredTypeObj = showAllInputs.filter(
      (each: InputObj) => each.type === type
    );
    console.log(filteredTypeObj);
    setCurrentObj(filteredTypeObj[0]);
  }

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
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
          <h1 className="text-3xl font-semibold mb-10 ">
            {title}
            <span>
              {" "}
              <button
                type="button"
                className="mr-5 mt-5"
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

                    <button className="mr-5 mt-5">
                      <img src={deleteIcon} alt="edit" />
                    </button>
                  </div>
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
            <div className="flex mt-10  ">
              <button
                type="button"
                onClick={() =>
                  showInput(InputType.text, "title", "placeholder")
                }
                className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
              >
                TEXT
              </button>
              <button
                type="button"
                onClick={() =>
                  showInput(InputType.number, "title", "placeholder")
                }
                className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
              >
                NUMBER
              </button>
              <button
                type="button"
                onClick={() =>
                  showInput(InputType.email, "title", "placeholder")
                }
                className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
              >
                EMAIL
              </button>
              <button
                type="button"
                onClick={() =>
                  showInput(InputType.password, "title", "placeholder")
                }
                className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
              >
                PASSWORD
              </button>
              <button
                type="button"
                onClick={() =>
                  showInput(InputType.date, "title", "placeholder")
                }
                className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer"
              >
                DATE
              </button>
            </div>
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
              <div className="relative mt-10">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title} // Assuming you have a state variable 'title' for the input value
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => {
                    if (!title) {
                      // If the input is empty, move the label back to its original position
                      setTitle("");
                    }
                  }}
                  className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                />
                <label
                  htmlFor="title"
                  className={`absolute left-0 top-1 ${
                    title
                      ? "text-gray-600 cursor-text -top-4 text-xs text-purple-600"
                      : "text-xl"
                  } transition-all`}
                >
                  Title
                </label>
              </div>
            )}

            {inputButtonClicked && (
              <>
                <div className="relative mt-10">
                  <input
                    type="text"
                    id={currentType}
                    name={currentType}
                    // value={currentObj.title} // Assuming you have a state variable 'title' for the input value
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setCurrentObj({
                        ...currentObj,
                        title: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      if (!inputValue) {
                        // If the input is empty, move the label back to its original position
                        setInputValue("");
                      }
                    }}
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor={currentType}
                    className={`absolute left-0 top-1 ${
                      inputValue
                        ? "text-gray-600 cursor-text -top-4 text-xs text-purple-600"
                        : "text-xl"
                    } transition-all`}
                  >
                    Title
                  </label>
                </div>
                <div className="relative mt-10">
                  <input
                    type="text"
                    id={currentType}
                    name={currentType}
                    // value={currentObj.placeholder} // Assuming you have a state variable 'placeholder' for the input value
                    onChange={(e) => {
                      setPlaceholderValue(e.target.value);
                      setCurrentObj({
                        ...currentObj,
                        placeholder: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      if (!inputValue) {
                        // If the input is empty, move the label back to its original position
                        setPlaceholderValue("");
                      }
                    }}
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor={currentType}
                    className={`absolute left-0 top-1 ${
                      placeholderValue
                        ? "text-gray-600 cursor-text -top-4 text-xs text-purple-600"
                        : "text-xl"
                    } transition-all`}
                  >
                    Placeholder
                  </label>
                </div>
                <button
                  className="border-2 mt-5 p-2 rounded-lg bg-green-500 text-white"
                  onClick={() => {
                    // console.log("Before update", showAllInputs);
                    // console.log("before Current Obj", currentObj);

                    setCurrentObj({
                      ...currentObj,
                      type: currentType,
                      title: inputValue,
                      placeholder: placeholderValue,
                    });
                    console.log("After Current Obj", currentObj);

                    setInputButtonClicked((prev) => !prev);

                    setShowAllInputs((prev) => {
                      // console.log("Prev state", prev)
                      return prev.map((input) =>
                        input.type === currentType
                          ? { ...input, ...currentObj }
                          : input
                      );
                    });
                    setInputValue("");
                    setPlaceholderValue("");
                  }}
                >
                  Done
                </button>
              </>
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
