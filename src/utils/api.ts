const BASE_URL = "http://localhost:8000";

export async function getAllForms() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/form/getAllForms`, options);

  if (response.ok) {
    const data = await response.json();

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

  const response = await fetch(`${BASE_URL}/form/getForm`, options);

  if (response.ok) {
    const data = await response.json();

    return data.form;
  }
};

export const onClickDeleteButton = async (id: string) => {
  const newId = id.toString();
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: newId }),
  };

  const response = await fetch("http://localhost:8000/form/delete", options);

  if (response.ok) {
    const data = await response.json();

    alert(data.message);
    window.location.reload();
  }
};
