import { useState } from "react";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name",
    },
    {
      id: "email",
      label: "Email",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Email",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "Your dob",
    },
    {
      id: "password",
      label: "Password",
      inputType: "text",
      buttonName: "Submit",
      placeholder: "Your Password",
    },
  ];

  // const [form, setForm] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === data.length - 1) {
      setIsSubmit(true);
    } else setIndex((prev) => prev + 1);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setIndex((prev) => prev - 1);
  };
  // console.log(formData);
  return (
    <div className="App">
      {!isSubmit ? (
        <form className="container" onSubmit={handleSubmit}>
          {index > 0 && (
            <a href="/" onClick={handleBack}>
              Back
            </a>
          )}
          <label>{data[index].label}: </label>
          <input
            type={data[index].inputType}
            placeholder={data[index].placeholder}
            value={formData[data[index].id] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [data[index].id]: e.target.value })
            }
            required
          />
          <button>{data[index].buttonName}</button>
        </form>
      ) : (
        <h1>
          Details: {formData.name}, {formData.email}, {formData.dob},
          {formData.password}
        </h1>
      )}
    </div>
  );
}
