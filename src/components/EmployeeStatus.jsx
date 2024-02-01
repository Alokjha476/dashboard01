import { useState } from "react";
import { RiListSettingsFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const EmployeestatusData = [
  {
    id: 3,
    profile:
      "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors8.png",
    name: "vishal",
    position: "tranning",
    age: 22,
    performace: "88%",
    type: "tranning",
  },
  {
    id: 2,
    profile:
      "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors8.png",
    name: "Aman",
    position: "tranning",
    age: 23,
    performace: "+99%",
    type: "permanent",
  },
  {
    id: 1,
    profile:
      "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors8.png",
    name: "vikash",
    position: "tranning",
    age: 21,
    performace: "95%",
    type: "tranning",
  },
];

const EmployeeStatus = () => {
  const [employeeStatus, setEmployeeStatus] = useState(EmployeestatusData);

  return (
    <>
      <div className=" mb-3 card-employeestatus">
        <div className="card-header">
          <b style={{ fontSize: "20px", paddingLeft: "6px" }}>
            Employee Status
          </b>
          <b
            style={{
              display: "flex",
              padding: "2px",
              margin: "2px",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "lightblue",
              float: "right",
              border: "1px solid",
              borderRadius: "5px",
              color: "blue",
              textShadow: "1px 1px 2px #000000",
            }}
          >
            Fillter & short
            <span className="pl-1">
              <RiListSettingsFill />
            </span>
          </b>
        </div>
        <div
          className="card-header flex justify-center items-center ml-36 pl-4 pt-2 pb-2 "
          style={{ color: "grey" }}
        >
          <span style={{ marginRight: "60px" }}>
            <i className="flex">
              <span>Employee </span>
              <span className="pl-2"> Name</span>
            </i>
          </span>
          <span style={{ marginRight: "60px" }}>
            <i>Department</i>
          </span>
          <span style={{ marginRight: "50px" }}>
            <i>Age</i>
          </span>
          <span style={{ marginRight: "50px" }}>
            <i>Discipline</i>
          </span>
          <span style={{ marginRight: "50px", paddingLeft: "15px" }}>
            <i>Status</i>
          </span>
        </div>

        <div className="card-body mt-2 ml-6 pl-4 ">
          {employeeStatus.map((data, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={data.profile}
                alt="Employee"
                style={{ width: "25px", borderRadius: "50%" }}
              />
              <span style={{ marginLeft: "12px" }}>
                <b>{data.name}</b>
              </span>
              <span style={{ marginLeft: "80px" }}>
                <b>{data.position}</b>
              </span>
              <span style={{ marginLeft: "80px" }}>
                <b>{data.age}</b>
              </span>
              <span style={{ marginLeft: "80px" }}>
                <b>{data.performace}</b>
              </span>
              <span
                style={{
                  borderRadius: "4px",
                  marginLeft: "80px",
                  border: "1px solid green",
                  backgroundColor: "lightgreen",
                }}
              >
                <i style={{ color: "green", width: "10px" }}>{data.type}</i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default EmployeeStatus;
