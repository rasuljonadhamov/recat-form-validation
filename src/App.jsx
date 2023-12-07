import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPasword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm password",
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
      <form onSubmit={handleSubmit}>
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
