import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoManOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";

const SideBar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [attendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!attendanceDropdownOpen);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 siderbar-body position-absolute"
      style={{
        width: "280px",
        fontWeight: "bold",
      }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <div
          className="dropdown"
          style={{ marginLeft: "-39px", float: "left" }}
        >
          <div
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none profile-text"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <>
              {isAuthenticated && (
                <div className="flex items-center">
                  <img
                    src={user.picture}
                    alt={user.picture}
                    width="34"
                    height="34"
                    className="rounded-circle me-2"
                  />
                  <strong>{user.name}</strong>
                </div>
              )}
            </>
          </div>
          {isAuthenticated && (
            <i
              className="post-name "
              style={{ marginLeft: "44px", fontSize: "9px" }}
            >
              SOFTWARE DEVELOPER
            </i>
          )}
        </div>
      </a>
      <hr />
      <div className=" flex-auto justify-center items-center">
        <ul className="nav nav-pills flex-column mb-auto sidebar-li flex">
          <li className="nav-item ">
            <Link to="/" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <MdOutlineSpaceDashboard
                style={{
                  fontSize: "22px",
                  marginRight: "10px",
                  display: "flex",
                }}
              />
              Dashboard
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <VscGraph
                className=""
                style={{ fontSize: "22px", marginRight: "10px" }}
              />
              Finance
            </a>
          </li>
          <li>
            <a
              className="nav-link link-body-emphasis"
              onClick={toggleAttendanceDropdown}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <FaRegIdCard style={{ fontSize: "22px", marginRight: "10px" }} />{" "}
              Employees
            </a>
            {attendanceDropdownOpen && (
              <ul>
                <Link
                  to="/AttendancePath"
                  style={{
                    float: "right",
                    marginRight: "40px",
                    borderRadius: "3px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  <FaCaretRight />
                  Attendance
                </Link>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <MdOutlineHomeWork
                style={{ fontSize: "22px", marginRight: "10px" }}
              />
              Companany
            </a>
          </li>
          <li>
            <Link to="/candidate" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <IoManOutline style={{ fontSize: "22px", marginRight: "10px" }} />{" "}
              Candidate
            </Link>
          </li>
          <li>
            <Link to="/Calander" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <SlCalender style={{ fontSize: "22px", marginRight: "10px" }} />{" "}
              Calendar
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto sidebar-li">
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            <CgProfile style={{ fontSize: "22px", marginRight: "10px" }} />{" "}
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            <CiSettings style={{ fontSize: "22px", marginRight: "10px" }} />{" "}
            Setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
