
import TextField  from "@mui/material/TextField"

type Props ={
    name: string 
    type:string 
    label:string
}

const CustomizedInput = (props: Props)=>{
    return <TextField margin="normal" InputProps={{style:{color:"white" ,width:"400px" , borderRadius:10 , fontSize:20}}} name={props.name} label={props.label} type={props.type}  ></TextField>
};

export default CustomizedInput;

