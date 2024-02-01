import React, { useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Attendance = () => {
  const generateRandomAttendanceData = () => {
    const randomAttendanceData = [];
    const names = [
      "John Doe",
      "Jane Doe",
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Harry",
    ];

    for (let i = 0; i < 10; i++) {
      const randomDate = `2024-01-${Math.floor(Math.random() * 31) + 1}`;
      const randomEmpId = `RW${Math.floor(Math.random() * 10000)}`;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomStatus = Math.random() < 0.5 ? "Present" : "Absent";
      const randomInTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
        Math.random() * 60
      )} ${Math.random() < 0.5 ? "AM" : "PM"}`;
      const randomOutTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
        Math.random() * 60
      )} ${Math.random() < 0.5 ? "AM" : "PM"}`;

      randomAttendanceData.push({
        date: randomDate,
        empId: randomEmpId,
        name: randomName,
        status: randomStatus,
        inTime: randomInTime,
        outTime: randomOutTime,
      });
    }

    return randomAttendanceData;
  };

  const attendanceData = generateRandomAttendanceData();

  const [details, setDetails] = useState(attendanceData);
  return (
    <>
      <Navbar />

      <div className="Attand-list">
        <div>
          <h2>Monthly Attendance - January 2024</h2>
          <table>
            <thead>
              <tr>
                <th>
                  <BsFillCalendarDateFill /> Date
                </th>
                <th>
                  <FaAddressCard />
                  Emp Id
                </th>
                <th>Name</th>
                <th>Status</th>
                <th>In Time</th>
                <th>Out Time</th>
              </tr>
            </thead>
            <tbody>
              {details.map((data, index) => (
                <tr key={index}>
                  <td>{data.date}</td>
                  <td>{data.empId}</td>
                  <td>{data.name}</td>
                  <td>{data.status}</td>
                  <td>{data.inTime}</td>
                  <td>{data.outTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SideBar />
      <Footer />
    </>
  );
};

export default Attendance;
