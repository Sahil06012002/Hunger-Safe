import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Button variant="text" onClick={() => navigate("/")}>
          Hunger Safe
        </Button>
        <Button variant="contained" onClick={() => navigate("/admin1")}>
          Admin
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <Button variant="contained" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </div>

        <div
          style={{
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
