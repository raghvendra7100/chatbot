import { Typography } from "@mui/material";

import { Link } from "react-router-dom";
const Logo=()=>{
    return (
        <div 
            style={{
                display:"flex", 
                marginRight:"auto" , 
                alignItems:'center', 
                gap:"8px"}}>
                 <Link to = {"/"}>
                    <img src="logo.jpg" alt="logo" width={"30px"} height={"30px"} className="image-inverted"/>
                    
                 </Link>
                 <Typography sx={{display:{md:"block" , sm:"none" , xs:"none" , mr:"auto" , fontWeight:"800" , textShadow:"2px 2px 20px #000"
                    }}}>
                        <span style = {{fontSize:"20px"}}>COGNI</span>-AI
                </Typography>
        </div>

)}

export default Logo;