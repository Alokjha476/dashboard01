import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Calendar() {
  return (
    <>
      <div
        style={{
          float: "right",
          width: "1030px",
          marginTop: "86px",
          color: "blue",
          border: "2px",
          backgroundColor: "#fffbd7",
        }}
      >
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"100vh"}
          backgroundColor={"gray"}
        ></Fullcalendar>
      </div>
    </>
  );
}

export default Calendar;
