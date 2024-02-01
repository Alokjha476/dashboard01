import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactiveButton from "reactive-button";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addEmployee, updateEmployee } from "../store/employeeSlice";

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState("idle");
  const [updateData, setUpdateData] = useState(null);

  const name = useRef();
  const email = useRef();
  //const id = useRef();
  const dept = useRef();
  const address = useRef();
  const phone = useRef();
  // const branch = useRef();
  // const picture = useRef();


  useEffect(() => {
    const updateEmployeeData = JSON.parse(
      localStorage.getItem("updateEmployeeData")
    );

    if (updateEmployeeData) {
      setUpdateData(updateEmployeeData);

      name.current.value = updateEmployeeData.name;
      email.current.value = updateEmployeeData.email;
      // id.current.value = updateEmployeeData.EmpID;
      dept.current.value = updateEmployeeData.Dept;
      address.current.value = updateEmployeeData.Address;
      phone.current.value = updateEmployeeData.Phone;
      // branch.current.value = updateEmployeeData.Branch;
    }
  }, []);

  // const onClickHandler =  (event) => {
  //   setState("loading");
  //   setTimeout(() => {
  //     setState("success");
  //     handleSubmit(event);
  //   }, 2000);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const empName = name.current.value;
    const empEmail = email.current.value;
    // const empId = id.current.value;
    // const empBranch = branch.current.value;
    // const empPicture = picture.current.files[0];
    const empAddress = address.current.value;
    const empPhone = phone.current.value;
    const empDept = dept.current.value;

    const formData = new FormData();
    formData.append("name", empName);
    formData.append("email", empEmail);
    // formData.append("EmpID", empId);
    formData.append("Dept", empDept);
    // formData.append("Branch", empBranch);
    // formData.append("Picture", empPicture);
    formData.append("Address", empAddress);
    formData.append("Phone", empPhone);

    // http://localhost:8080
    try {
      const response = await axios.get("/employee", formData, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      console.log(response);

      if (!updateData) {
        name.current.value = "";
        email.current.value = "";
        // id.current.value = "";
        dept.current.value = "";
        // branch.current.value = "";
        // picture.current.value = "";
        phone.current.value = "";
        address.current.value = "";
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }

    if (!updateData) {
      name.current.value = "";
      email.current.value = "";
      // id.current.value = "";
      dept.current.value = "";
      // branch.current.value = "";
      // picture.current.value = "";
      phone.current.value = "";
      address.current.value = "";
    }

    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   const empPicture = reader.result;

      if (localStorage.getItem("updateEmployeeData")) {
        const updateEmployeeData = JSON.parse(
          localStorage.getItem("updateEmployeeData")
        );
        dispatch(
          updateEmployee({
            dataId: updateEmployeeData.id,
            updatedData: {
              name: empName,
              email: empEmail,
              // EmpID: empId,
              Dept: empDept,
              // Branch: empBranch,
              // Picture: empPicture,
              Phone: empPhone,
              Address: empAddress,
            },
          })
        );
        localStorage.removeItem("updateEmployeeData");
      } else {
        dispatch(
          addEmployee({
            name: empName,
            email: empEmail,
            // EmpID: empId,
            Dept: empDept,
            // Branch: empBranch,
            // Picture: empPicture,
            Phone: empPhone,
            Address: empAddress,
          })
        );
      }

      navigate("/AttendancePath");
    };

    // reader.readAsDataURL(empPicture);
  // };

  return (
    <>
      <div style={{ float: "right", marginTop: "30px" }}>
        <h2 className="add-emp-form-heading pl-36">Add a new employee</h2>
        <form onSubmit={handleSubmit} className="pt-3 Add-emp-info">
          <label
            htmlFor="name"
            className="htmlForm-label "
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b className="required"> Emp Name:</b>
          </label>
          <input
            style={{
              marginLeft: "20px",
              width: "70%",
              borderRadius: "6px",
            }}
            type="name"
            ref={name}
            className="name opacity-90 p-2 border-1 border-gray-600  outline-none required"
            id="name"
            placeholder="Enter name here..."
            required
          />

          <br />
          <label
            htmlFor="email"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b>Emp Email:</b>
          </label>
          <input
            style={{ marginLeft: "20px", width: "70%", borderRadius: "6px" }}
            type="email"
            ref={email}
            className="gmail opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="gmail"
            placeholder="Enter email here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b>Department:</b>
          </label>
          <input
            style={{ marginLeft: "15px", width: "70%", borderRadius: "6px" }}
            type="text"
            ref={dept}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="Enter department here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b>Emp Address:</b>
          </label>
          <input
            style={{ marginLeft: "2px", width: "70%", borderRadius: "6px" }}
            type="address"
            ref={address}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="Enter address here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b> Emp Phone:</b>
          </label>
          <input
            style={{ marginLeft: "17px", width: "70%", borderRadius: "6px" }}
            type="tel"
            ref={phone}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="+91 Enter number  here..."
            required
          />
          <br />
         {/* <label htmlFor="branch" className="mt-4 ml-7 required">
            <b> Select Branch:</b>
          </label>
          <select
            className="ml-2 p-1 border-1"
            id="branch"
            ref={branch}
            name="branch"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Choose Branch
            </option>
            <option value="Raipur jivan vihar,Labhandih">Raipur</option>
            <option value="Gurgaon Udyog vihar phase-V">Gurgoan</option>
            <option value="Bhopal">Bhopal</option>
          </select>
          <br />
          */ }
         {/* <label htmlFor="role" className="htmlForm-label mt-4 ml-7 required">
            <b>Upload Picture:</b>
          </label>
          <input
            style={{ marginLeft: "15px", width: "70%", borderRadius: "6px" }}
            type="file"
            ref={picture}
            className="picture"
            id="picture"
            required
          />*/}
{/* 
          <center style={{ marginTop: "30px" }}>
            <ReactiveButton
              type="submit"
              buttonState={state}
              idleText="Add"
              loadingText="Loading"
              successText="Done"
              onClick={onClickHandler}
            />
          </center> */}
          <center style={{ marginTop: "30px" }}>
            <button type="submit">Add</button>
          </center>

        </form>
      </div>
    </>
  );
};
export default AddEmployeeForm;
