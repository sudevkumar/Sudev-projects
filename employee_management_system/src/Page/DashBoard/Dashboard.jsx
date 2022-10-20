import React, { useState } from "react";
import { employeesData } from "../../Data/index.js";
import Edit from "../Edit/Edit";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import Add from "../Add/Add.jsx";
import List from "../List/List.jsx";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to to retrive this again!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, Cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s profile has been deleted succesfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  const handleEdit = (id) => {
    console.log(id);
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEdit(true);
  };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEdit && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEdit && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
}

export default Dashboard;
