import React from "react";
import { Card, Button, TextField } from "@mui/material";
// import Itemdiv from "./Itemdiv";
// import { emptyStatement } from "@babel/types";
class Additems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [],
      counter: 1,
      id: null,
    };
  }

  // componentDidMount() {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const id = queryParams.get("id");
  //   console.log(id);
  //   this.setState({ id });
  //   console.log(this.state.id); // check this once
  // }

  onSubmitClick = () => {
    var data = [];
    var items = document.getElementsByClassName("item");
    var quantity = document.getElementsByClassName("quantity");
    for (let i = 0; i < 5; i++) {
      var emptyObj = {};
      console.log(this.state.id);

      emptyObj.userid = localStorage.getItem("id");
      emptyObj.item = items[i].value;
      emptyObj.quantity = Number(quantity[i].value);
      if (emptyObj.item != null && emptyObj.quantity != 0) {
        data.push(emptyObj);
      }
    }
    this.setState(Object.assign(this.state.itemData, data));
    console.log(this.state.itemData, data);

    fetch("http://localhost:3000/insertItem", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorisation: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        itemData: this.state.itemData,
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };

  render() {
    const { counter } = this.state;
    const rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(
        <div
          key={i}
          className="fields"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            className="item"
            placeholder="Item"
            // onChange={this.itemChangeContent}
          />
          {/* <br /> */}
          <input
            className="quantity"
            // fullWidth={true}
            placeholder="Quantity"
            // variant="standard"
            // onChange={this.quantityChangeContent}
          />
        </div>
      );
      <br />;
    }
    return (
      <div>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card varint="outlined" style={{ width: 400, padding: 10 }}>
            {rows}
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                size={"medium"}
                variant="contained"
                onClick={
                  this.onSubmitClick
                  // () => {
                  //   fetch("http://localhost:3000/insertItem", {
                  //     method: "post",
                  //     headers: { "Content-Type": "application/json" },
                  //     body: JSON.stringify({
                  //       userid: counter,
                  //       item: this.state.itemData.item,
                  //       quantity: this.state.itemData.quantity,
                  //     }),
                  //   }).then((res) => {
                  //     res.json().then((data) => {
                  //       console.log(data);
                  //     });
                  //   });
                  //   this.setState({
                  //     counter: counter + 1,
                  //   });
                  // }
                }
                //
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Additems;
