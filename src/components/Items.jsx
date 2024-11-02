import React from "react";

const Items = ({ items }) => {
  console.log(items);

  return (
    <div>
      <h1
        style={{
          padding: "10px 0px",
          backgroundColor: "blue",
          color: "white",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
          borderRadius :"5px"
        }}
      >
        {items}
      </h1>
    </div>
  );
};

export default Items;
