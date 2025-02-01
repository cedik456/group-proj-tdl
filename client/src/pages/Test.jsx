import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Test;
