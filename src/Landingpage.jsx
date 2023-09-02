import { Typography } from "@mui/material";
function Landingpage(){
    return <div>
        <Typography style={{
        position: "absolute",
        top : "50%",
        left : "50%",
        transform : "translate(-50% , 50%)"
        
        }}
         variant='h2'
         color={"white"}>
        Welcome to Hunger Safe</Typography>
    </div>
}
export default Landingpage;