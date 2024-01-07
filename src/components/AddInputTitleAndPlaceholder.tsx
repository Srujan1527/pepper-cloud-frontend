const AddInputTitleAndPlaceholder = ({
  currentType,
  setInputValue,
  setCurrentObj,
  currentObj,
  inputValue,
  setPlaceholderValue,
  placeholderValue,
  setInputButtonClicked,
  setShowAllInputs,
}: any) => {
  return (
    <>
      <div className="relative mt-10">
        <input
          type="text"
          id={currentType}
          name={currentType}
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
          className={`absolute left-0 top-0 ${
            inputValue ? "text-xs text-purple-600 -translate-y-4" : "text-xl"
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
          onChange={(e) => {
            setPlaceholderValue(e.target.value);
            setCurrentObj({
              ...currentObj,
              placeholder: e.target.value,
            });
          }}
          onBlur={() => {
            if (!placeholderValue) {
              // If the input is empty, move the label back to its original position
              setPlaceholderValue("");
            }
          }}
          className="border-b-2 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
        />
        <label
          htmlFor={currentType}
          className={`absolute left-0 top-0 ${
            placeholderValue
              ? "text-xs text-purple-600 -translate-y-4"
              : "text-xl"
          } transition-all`}
        >
          Placeholder
        </label>
      </div>

      <button
        className="border-2 mt-5 p-2 rounded-lg bg-green-500 text-white"
        onClick={() => {
          setCurrentObj({
            ...currentObj,
            type: currentType,
            title: inputValue,
            placeholder: placeholderValue,
          });

          setInputButtonClicked((prev: any) => !prev);

          setShowAllInputs((prev: any) => {
            return prev.map((input: any) =>
              input.type === currentType ? { ...input, ...currentObj } : input
            );
          });
          setInputValue("");
          setPlaceholderValue("");
        }}
      >
        Done
      </button>
    </>
  );
};

export default AddInputTitleAndPlaceholder;
