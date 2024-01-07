import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllForms } from "../utils/helperFunctions";

const Home = () => {
  const navigate = useNavigate();
  const [showAllForms, setShowAllForms] = useState<any[]>([]);

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

  const onClickDeleteButton = async (id: string) => {
    const newId = id.toString();
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: newId }),
    };

    const response = await fetch("http://localhost:8000/form/delete", options);

    console.log("response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      alert(data.message);
      window.location.reload();
    }
  };

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
          <ul className="list-none text-xl  flex m-5 mt-20">
            {showAllForms.map((each: any) => (
              <li key={each._id} className="mr-16 border-2 p-2 rounded-md">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-2xl">{each.formTitle}</h2>
                  <div className="flex mt-5 justify-around">
                    <button
                      className="text-green-500 text-sm font-medium mr-2"
                      onClick={() => navigate(`/form/${each._id}`)}
                    >
                      VIEW
                    </button>
                    <button
                      className="text-blue-500 text-sm font-medium mr-2"
                      onClick={() => navigate(`/form/${each._id}/edit`)}
                    >
                      EDIT
                    </button>
                    <button
                      className="text-red-500 text-sm font-medium mr-2"
                      onClick={() => onClickDeleteButton(each._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
