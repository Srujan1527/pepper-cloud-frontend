export enum InputType {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
  date = "date",
}

export interface InputObj {
  type: InputType;
  title: string;
  placeholder: string;
}

export interface FormObj {
  formTitle: string;
  allInputs: InputObj[];
}
