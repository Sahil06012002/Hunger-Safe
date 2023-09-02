import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
function Signup() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.message === "signup successful") {
          localStorage.setItem("id", data.id);
          localStorage.setItem("token", data.token);
          navigate("/additems");

          // const id = data.id;
          // const token = data.token;
          // navigate(`/additems?id=${id}&token=${token}`);
        }
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
          Welcome to my project
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
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              fullWidth
              label="Name"
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
              fullWidth
              label="Address"
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              fullWidth
              type="email"
              label="Email"
              variant="standard"
            />
            <br />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              fullWidth
              label="Password"
              variant="standard"
              type="password"
            />
            <br /> <br />
            <Button
              type={"submit"}
              size={"medium"}
              variant="contained"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </Card>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
export default Signup;
