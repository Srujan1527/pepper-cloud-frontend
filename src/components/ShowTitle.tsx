import React from "react";
import edit from "../svgs/edit.svg";
const ShowTitle = ({
  title,
  isTitleEditButtonClicked,
  setIsTitleEditButtonClicked,
}: any) => {
  return (
    <>
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
    </>
  );
};

export default ShowTitle;
