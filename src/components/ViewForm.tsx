import React, { useEffect, useState } from "react";

import "../App.css";
import { useParams } from "react-router-dom";
import { title } from "process";
import { getForm } from "../utils/helperFunctions";

interface formSubmit {
  [key: string]: string | number | Date;
}

const ViewForm = () => {
  const params = useParams();
  const [form, setForm] = useState<any[]>([]);
  const [formSubmit, setFormSubmit] = useState<formSubmit>({});

  const id = params.id?.toString() as string;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const form = await getForm(id);
        if (form) {
          setForm(form);
        }
        // console.log("form", form);
      } catch (error: any) {
        console.error("Error fetching form:", error.message);
      }
    };

    fetchData();
  }, []);

  const submitForm = (e: any) => {
    e.preventDefault();
    alert("form submitted! Thank you, please check in the console");
    console.log(formSubmit);
  };

  // console.log("view form", form);
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col mt-20 border-2 w-[75%]">
        <h1 className="text-3xl font-semibold mt-10">View Form</h1>
        {form.length > 0 && (
          <form
            onSubmit={submitForm}
            className="flex flex-col justify-center items-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 p-2 mb-5">
              {form[0].allInputs.map((each: any, index: number) => (
                <div
                  className="flex flex-col mt-10 mb-2 mr-10 ml-10"
                  key={index}
                >
                  <label htmlFor={each._id} className={`text-xl`}>
                    {each.title}
                  </label>
                  <input
                    type={each.type}
                    id={each._id}
                    name={each.title}
                    placeholder={each.placeholder}
                    required
                    // value={currentObj.title} // Assuming you have a state variable 'title' for the input value
                    onChange={(e) => {
                      setFormSubmit((prev) => ({
                        ...prev,
                        [each.title]: e.target.value,
                      }));
                    }}
                    className="border-b-2 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer"
                  />
                </div>
              ))}
            </div>
            <div>
              <button
                type="submit"
                className="border-2  m-5 p-2 rounded-lg  bg-green-500 text-white font-semibold cursor-pointer "
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ViewForm;
