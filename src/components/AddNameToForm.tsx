const AddNameToForm = ({ title, setTitle }: any) => {
  return (
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
        className={`absolute left-0 top-0 ${
          title ? "text-xs text-purple-600 -translate-y-4" : "text-xl"
        } transition-all`}
      >
        Title
      </label>
    </div>
  );
};

export default AddNameToForm;
