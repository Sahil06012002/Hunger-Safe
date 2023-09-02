import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
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
        <Typography variant={"h6"} color={"gray"}>
          Welcome back
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card varint="outlined" style={{ width: 300, padding: 10 }}>
          <TextField
            fullWidth
            label="email"
            variant="standard"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            fullWidth
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br /> <br />
          <Button
            size={"medium"}
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/signin", {
                method: "POST",
                body: JSON.stringify({
                  email,
                  password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.length != 0) {
                    const id = data[0].id;
                    navigate(`/additems?id=${id}`);
                  } else {
                    <div>sign in not successful</div>;
                  }
                });
            }}
          >
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Signin;
