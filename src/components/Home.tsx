import React from "react";

const Home = () => {
  return (
    <div className=" h-screen p-5">
      <div className=" flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mt-10 font-semibold"> Welcome to Form.com</h1>
          <p className="text-center text-xl mt-2">
            This is simple form builder
          </p>
          <button className="border-2 w-1/2 mt-5 p-2 rounded-full bg-green-500 text-white">
            CREATE NEW FORM
          </button>
        </div>
      </div>

      <hr className="w-[100%] mt-5 border-gray-300" />

      <div className="mt-10">
        <h1 className="text-5xl ">Forms</h1>
        <p className="text-xl mt-2">You have no forms created yet </p>
      </div>
    </div>
  );
};

export default Home;
