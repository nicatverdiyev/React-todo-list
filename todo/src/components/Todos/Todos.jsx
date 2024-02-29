import React from "react";
import "../Todos/todo.css";
function Todos({ todos }) {
  console.log(todos);

  return (
    <div>
      Todos
      <table>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName} </td>
              <td>{item.email}</td>
              <td>{item.pass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
