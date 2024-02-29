import React, { useState } from "react";
import "../Form/form.css";

function Form({ todos, setTodos }) {
  const [formData, setformData] = useState({
    id: crypto.randomUUID(),
    fullName: "",
    email: "",
    pass: "",
  });

  const [isShow, setIsShow] = useState(false);

  function addToDo(e) {
    console.log(formData);
    e.preventDefault();
    let foundUser = todos.find((item) => item.email === formData.email);
    if (!foundUser) {
      setformData({ ...formData, id: crypto.randomUUID() });
      setTodos([...todos, formData]);
    } else {
      //   <p>salam</p>;
    }
  }
  return (
    <div>
      <form onSubmit={addToDo}>
        <div className="form-item">
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) =>
              setformData({ ...formData, fullName: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <input
            type={isShow ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setformData({ ...formData, pass: e.target.value })}
          />
          <input type="checkbox" onChange={(e) => setIsShow(!isShow)} />
        </div>

        <div className="form-item">
          <button type="submit">Add todo</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
