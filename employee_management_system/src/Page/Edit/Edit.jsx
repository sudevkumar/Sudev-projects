import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEdit }) {
  const id = selectedEmployee.id;
  const [firstName, setFirstname] = useState(selectedEmployee.firstName);
  const [lastName, setLastname] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleEdit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields required!",
        showConfirmButton: true,
      });
    }
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    setEmployees(employees);
    setIsEdit(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s profile has been updated succesfully!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary($)</label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="Date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "20px" }}>
          <input type="submit" value="Update" />
          <input
            type="button"
            className="muted-button"
            value="Cancle"
            style={{ marginLeft: "20px" }}
            onClick={() => setIsEdit(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
