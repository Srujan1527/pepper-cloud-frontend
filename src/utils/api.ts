const BASE_URL = process.env.BASE_URL;
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
