import React, { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import EmployeeStatus from "./EmployeeStatus";

const cardData = [
  {
    id: 1,
    Typeof: "Total Employee",
    noOf: 200,
    typeofCategory: "Employee",
  },
  {
    id: 2,
    Typeof: "Job View",
    noOf: 3342,
    typeofCategory: "Viewer",
  },
  {
    id: 3,
    Typeof: "Job Applied",
    noOf: 77,
    typeofCategory: "Applicants",
  },
];

const Homepage = () => {
  const [card, setCard] = useState(cardData);

  return (
    <>
      <div className="ml-4">
        <div className="container crd-container">
          <div
            className="row"
            style={{ marginLeft: "256px", marginTop: "20px" }}
          >
            {card.map((data, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card card-container">
                  <div className="card-body card-inpart">
                    <h5 className="card-title" style={{ color: "" }}>
                      {data.Typeof} <BsGraphUpArrow />
                    </h5>
                    <b
                      className="card-text"
                      style={{
                        color: "",
                        marginTop: "5px",
                        fontSize: "20px",
                      }}
                    >
                      {data.noOf}
                    </b>
                    <h6 style={{ color: "", marginTop: "7px" }}>
                      {data.typeofCategory}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
        <div className="flex mt-96 ml-14 ">
          <div className="pr-4 ml-60 mt-36">
            <EmployeeStatus />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Homepage;
