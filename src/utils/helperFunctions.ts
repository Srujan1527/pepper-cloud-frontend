export async function getAllForms() {
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

export const getForm = async (id: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  // console.log(options);

  const response = await fetch("http://localhost:8000/form/getForm", options);
  // console.log({ response });
  if (response.ok) {
    const data = await response.json();
    // console.log("forms", data);
    return data.form;
  }
};
