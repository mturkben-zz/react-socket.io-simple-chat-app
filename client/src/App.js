import React, { useState, useEffect } from "react";
import "./app.css";
import { io } from "socket.io-client";

import Messages from "./components/Messages";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [messages, setMessages] = useState([]);

  const [userName, setUserName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setUserName(prompt("Please Enter Your Nick Name", ""));

    socket.on("message", ({ userName, value }) => {
      setMessages([...messages, { userName, value }]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { userName, value });
    setValue("");
  };

  return (
    <div className="container">
      <header>
        <h2 style={{ textAlign: "center", fontWeight: "300" }}>
          React & Socket.io Simple Chat App
        </h2>
      </header>
      <div className="box">
        <div className="inner-box">
          {messages.map((m, i) => (
            <Messages key={i} data={m} />
          ))}
        </div>
        <form onSubmit={(e) => sendMessage(e)}>
          <input
            type="text"
            value={value}
            placeholder="Enter A Value"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit"> SEND </button>
        </form>
      </div>
    </div>
  );
};

export default App;
