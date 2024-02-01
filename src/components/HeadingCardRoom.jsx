import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { TfiImport } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchEmployee } from "../store/employeeSlice";

const HeadingCardRoom = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { addEmployeeData } = useSelector((store) => store.employeedata);
  console.log(addEmployeeData);
  const { searchResults } = useSelector((store) => store.employeedata);
  console.log(searchResults);

  const [filteredAddEmployeeData, setFilteredAddEmployeeData] = useState(searchResults);
  console.log(filteredAddEmployeeData);

  // const fetchFilteredData = () => {
  //   setFilteredAddEmployeeData(filteredAddEmployeeData);
  // };

// only i have to update => setSearchResults()

  useEffect(() => {
    handleSearch();
    // fetchFilteredData();
    // setFilteredAddEmployeeData(filteredAddEmployeeData)
  }, [searchQuery]);

  const handleSearch = () => {
    dispatch(searchEmployee({ empId: searchQuery }));
  };

  return (
    <>
      <div
        style={{
          float: "right",
          marginTop: "40px",
          marginRight: "25px",
        }}
      >
        <Link to="/addemployeeform">
          <button className="btn btn-primary">
            <div className="flex items-center">
              <b>
                <IoMdAdd />
              </b>
              <span className="pl-2">Add Employee</span>
            </div>
          </button>
        </Link>
      </div>

      {
        //right side//
      }

      {/* <div style={{ float: "right", marginTop: "40px", marginRight: "40px" }}>
        <button className="btn btn-secondry">
          <b>
            <TfiImport />
          </b>
          Import Employee
        </button>
      </div> */}
      {
        // import button
      }

      <div className="card-room-heading p-3 bg-gray-50">
        <h3>Employee (200)</h3>
        <p>All employee of the company are listed here</p>
        <div
          className="input-group"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <div
            className="form-outline"
            data-mdb-input-init
            style={{ cursor: "sw-resize" }}
          >
            <div className="flex">
              <input
                type="search"
                id="form1"
                placeholder="Search.."
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <label className="form-label" htmlFor="form1">
                <span className="" id="form1">
                  Search
                </span>
              </label>
            </div>
          </div>
          <button className="btn btn-secondry">
            <div className="flex items-center">
              <b>
                <CiFilter />
              </b>
              <span className="pl-2"> Filter</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default HeadingCardRoom;
