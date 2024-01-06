import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showAllForms, setShowAllForms] = useState<any[]>([]);

  async function getAllForms() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:8000/form/getAllForms",
      options
    );
    console.log({ response });
    if (response.ok) {
      const data = await response.json();
      // console.log("forms", data);
      return data.forms;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forms = await getAllForms();
        if (forms) {
          setShowAllForms(forms);
        }
        // console.log("forms", forms);
      } catch (error: any) {
        console.error("Error fetching forms:", error.message);
      }
    };

    fetchData();
  }, []);
  console.log("showAllForms", showAllForms);
  return (
    <div className=" h-screen p-5">
      <div className=" flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mt-10 font-semibold"> Welcome to Form.com</h1>
          <p className="text-center text-xl mt-2">
            This is simple form builder
          </p>
          <button
            className="border-2 w-1/2 mt-5 p-2 rounded-full bg-green-500 text-white"
            type="button"
            onClick={() => navigate("/form/create")}
          >
            CREATE NEW FORM
          </button>
        </div>
      </div>

      <hr className="w-[100%] mt-5 border-gray-300" />

      <div className="mt-10">
        <h1 className="text-5xl">Forms</h1>
        {showAllForms.length === 0 ? (
          <p className="text-xl mt-2">You have no forms created yet</p>
        ) : (
          <ul className="list-none text-xl mt-2">
            {showAllForms.map((each: any) => (
              <li key={each._id}>{each.formTitle}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
