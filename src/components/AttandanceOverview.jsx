import React, { useState } from "react";
import HeadingCardRoom from "./HeadingCardRoom";
import { IoMdArrowDropdown } from "react-icons/io";

const AttendanceCategory = ["All", "Present", "Half day", "Absent"];
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const checkin = [
  "OFF",
  "9:08 AM",
  "9:35 AM",
  "9:15 AM",
  "9:13 AM",
  "9:55 AM",
  "OFF",
];
const checkout = [
  "OFF",
  "6:08 PM",
  "6:45 PM",
  "6:15 PM",
  "5:13 PM",
  "6:04 PM",
  "OFF",
];
const calculateDuration = (checkin, checkout) => {
  const durationArray = [];

  for (let i = 0; i < checkin.length; i++) {
    if (checkin[i] !== "OFF" && checkout[i] !== "OFF") {
      const checkinTime = new Date(`2022-01-01 ${checkin[i]}`);
      const checkoutTime = new Date(`2022-01-01 ${checkout[i]}`);

      const diffMilliseconds = checkoutTime - checkinTime;
      const hours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      const minutes = Math.floor(
        (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      );

      durationArray.push({ hours, minutes });
    } else {
      durationArray.push(null);
    }
  }

  return durationArray;
};

const workDuration = calculateDuration(checkin, checkout);

const status = ["Holiday", "WFH", "WFO", "WFO", "WFH", "WFO", "Holiday"];
const AttandanceOverview = () => {
  const [category, setCotegory] = useState(AttendanceCategory);
  const [weekName, setWeekName] = useState(week);
  const [checkIn, setCheckIn] = useState(checkin);
  const [checkOut, setCheckOut] = useState(checkout);
  const [workHours, setWorkHours] = useState(workDuration);
  const [statusEmp, setStatusEmp] = useState(status);
  return (
    <>
      <HeadingCardRoom />

      <div
        className="Attendance-overview-container"
        style={{ marginRight: "30px" }}
      >
        <div style={{ display: "flex", margin: "10px" }}>
          <h5 className="font-bold">Attendance Overview</h5>
          {category.map((data, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                style={{ marginLeft: "70px" }}
              />
              <label className="form-check-label">{data}</label>
            </div>
          ))}
        </div>
        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "5px",
            cursor: "pointer",
          }}
        >
          <p style={{ marginLeft: "20px" }}>Day</p>

          <p style={{ marginLeft: "120px" }}>Check-in</p>
          <span className="pl-2">
            <IoMdArrowDropdown />
          </span>

          <p style={{ marginLeft: "150px" }}>Check-out</p>
          <span className="pl-2">
            <IoMdArrowDropdown />
          </span>

          <p style={{ marginLeft: "150px" }}>Work hours</p>
          <span className="pl-2">
            <IoMdArrowDropdown />
          </span>

          <p style={{ marginLeft: "100px" }}>Status</p>
          <span className="pl-2">
            <IoMdArrowDropdown />
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "15px" }}>
            {weekName.map((weekname, index) => (
              <p
                key={index}
                style={{
                  marginTop: "35px",
                  paddingLeft: "4px",
                  fontSize: "15px",
                }}
              >
                <b>{weekname}</b>
              </p>
            ))}
          </div>
          <div style={{ marginLeft: "80px" }}>
            {checkIn.map((checkin, index) => (
              <p key={index} style={{ marginTop: "35px" }}>
                <b>{checkin}</b>
              </p>
            ))}
          </div>
          <div style={{ marginLeft: "180px" }}>
            {checkOut.map((checkout, index) => (
              <p key={index} style={{ marginTop: "35px" }}>
                <b>{checkout}</b>
              </p>
            ))}
          </div>
          <div style={{ marginLeft: "180px" }}>
            {workHours.map((workhours, index) => (
              <p key={index} style={{ marginTop: "35px" }}>
                <b>
                  {workhours
                    ? `${workhours.hours} hours ${workhours.minutes} minutes`
                    : "OFF"}
                </b>
              </p>
            ))}
          </div>
          <div style={{ marginLeft: "50px" }}>
            {statusEmp.map((statusemp, index) => (
              <p key={index} style={{ marginTop: "35px" }}>
                <b>{statusemp}</b>{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AttandanceOverview;
