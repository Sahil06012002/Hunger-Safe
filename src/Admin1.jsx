import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";

function Admin1() {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/getItem")
      .then((res) => {
        res.json().then((data) => {
          setItems(data);
        });
      })
      .catch((error) => {
        console.error("error while fetching data", error);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card varint="outlined" style={{ width: 300, padding: 10 }}>
        {items.map((item) => {
          return (
            <div>
              {item.item}
              {item.quantity}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
export default Admin1;
