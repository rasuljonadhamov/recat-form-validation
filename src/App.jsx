import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";

function App() {
  const [values, setValues] = useState({
    username: "",
    country: "",
    language: "",
    soha: "",
    money: "",
    education: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be at least 3 character.",
      label: "Teaxt area",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "You should write this",
      label: "Country",
      required: true,
    },
    {
      id: 6,
      name: "language",
      type: "text",
      placeholder: "Language",
      errorMessage: "You should write this",
      label: "Language",
      required: true,
    },
    {
      id: 7,
      name: "soha",
      type: "text",
      placeholder: "Soha",
      errorMessage: "You should write this",
      label: "Sohani kiriting",
      required: true,
    },
    {
      id: 8,
      name: "money",
      type: "number",
      placeholder: "Maoshingizni kiriting",
      errorMessage: "You should write this",
      label: "Maoshingizni kiriting",
      required: true,
    },
    {
      id: 9,
      name: "education",
      type: "text",
      placeholder: "Qayerda oqiganingizni kiriting",
      errorMessage: "You should write this",
      label: "Talim darajangizni kiriting",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 character and include at least 1 letter ,1 number and 1 special character, You can not write number in the end",
      label: "Password",
      pattern:
        "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      required: true,
    },

    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords do not match.",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <Header />
        {inputs.map((input) => {
          return (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
