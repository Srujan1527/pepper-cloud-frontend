import React from "react";
import edit from "../svgs/edit.svg";
import deleteIcon from "../svgs/delete.svg";
const CreateForm = () => {
  return (
    <div className=" h-screen p-5 flex flex-col justify-start items-center ">
      <div className=" flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl mt-10 "> Create New Form</h1>
        </div>
      </div>
      <div id="formContainer" className="flex justify-center mt-10 w-full">
        <div
          id="createForm"
          className="border-2 p-5 flex flex-col justify-center items-center w-[70%]"
        >
          <h1 className="text-3xl font-semibold mb-10">Untitled Form</h1>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2 mb-5">
              <div className="flex justify-center items-center  shadow-md  p-2 mb-5">
                <div className="relative mr-2 mt-5 ml-2">
                  <input
                    type="text"
                    id="username"
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all text-xl "
                  >
                    Username
                  </label>
                </div>
                <button className="mr-5 mt-5">
                  <img src={edit} alt="edit" />
                </button>

                <button className="mr-5 mt-5">
                  <img src={deleteIcon} alt="edit" />
                </button>
              </div>
              <div className="flex justify-center items-center  shadow-md  p-2 mb-5">
                <div className="relative mr-2 mt-5 ml-2">
                  <input
                    type="text"
                    id="username"
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all text-xl "
                  >
                    Username
                  </label>
                </div>
                <button className="mr-5 mt-5">
                  <img src={edit} alt="edit" />
                </button>

                <button className="mr-5 mt-5">
                  <img src={deleteIcon} alt="edit" />
                </button>
              </div>
              <div className="flex justify-center items-center  shadow-md  p-2 mb-5">
                <div className="relative mr-2 mt-5 ml-2">
                  <input
                    type="text"
                    id="username"
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all text-xl "
                  >
                    Username
                  </label>
                </div>
                <button className="mr-5 mt-5">
                  <img src={edit} alt="edit" />
                </button>

                <button className="mr-5 mt-5">
                  <img src={deleteIcon} alt="edit" />
                </button>
              </div>
              <div className="flex justify-center items-center  shadow-md  p-2 mb-5">
                <div className="relative mr-2 mt-5 ml-2">
                  <input
                    type="text"
                    id="username"
                    className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all text-xl "
                  >
                    Username
                  </label>
                </div>
                <button className="mr-5 mt-5">
                  <img src={edit} alt="edit" />
                </button>

                <button className="mr-5 mt-5">
                  <img src={deleteIcon} alt="edit" />
                </button>
              </div>
            </div>
          </div>
          <button className="border-2 text-blue-500 font-medium rounded-md p-2 text-sm">
            {" "}
            ADD INPUT
          </button>
          <div className="flex mt-10  ">
            <button className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer">
              TEXT
            </button>
            <button className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer">
              NUMBER
            </button>
            <button className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer">
              EMAIL
            </button>
            <button className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer">
              PASSWORD
            </button>
            <button className="border-2  mr-2 p-2 rounded-lg  bg-blue-500 text-white font-semibold cursor-pointer">
              DATE
            </button>
          </div>
          <button className="border-2  mt-5 p-2 rounded-lg  bg-green-500 text-white font-semibold cursor-pointer">
            SUBMIT
          </button>
        </div>
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
            <div className="relative mt-5">
              <input
                type="text"
                id="username"
                className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all text-xl "
              >
                Username
              </label>
            </div>
          </div>
        </div>
      </div>
      <div id="buttonContainer">
        <button className="border-2  mt-5 p-2 rounded-lg  bg-green-500 text-white">
          CREATE FORM
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
