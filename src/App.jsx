import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Appbar from "./Appbar";
import Landingpage from "./Landingpage";
import "./App.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Additems from "./Additems";
import React from "react";
import Admin1 from "./Admin1";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "pink",
      }}
    >
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path={"/"} element={<Landingpage />} />
          <Route path={"/signin"} element={<Signin />} />
          {/* {localStorage.getItem("token") != null && (
            <Route path={"/additems"} element={<Additems />} />
          )} */}
          <Route path={"/signup"} element={<Signup />} />
          <Route
            path={"/additems"}
            element={
              localStorage.getItem("token") != null ? (
                <Additems />
              ) : (
                <Navigate replace to="/signup" />
              )
            }
          />
          <Route path={"/admin1"} element={<Admin1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
