import React from "react";

const Messages = ({ data }) => {
  const style = {
    main: {
      display: "flex",
      flexDirection: "row",
    },
    user: {
      color: "#1b4dd5",
      fontWeight: "500",
    },
    message: {
      textIndent: 10,
    },
  };

  return (
    <div style={style.main}>
      <div style={style.user}> {data.userName}: </div>
      <div style={style.message}> {data.value} </div>
    </div>
  );
};

export default Messages;
