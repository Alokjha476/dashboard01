import React, { useState, useEffect } from "react";
import { Spin } from "react-cssfx-loading";

const ShowLoaderWithLogged = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "blue",
      }}
    >
      {loading && <Spin width="100px" height="100px" />}
    </div>
  );
};

export default ShowLoaderWithLogged;
