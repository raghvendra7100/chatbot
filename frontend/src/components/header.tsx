
import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/Navigationlink"
const Header = () => {
    const auth = useAuth();
    return (
    <AppBar sx={{bgcolor:"transparent" , position :"static" , boxShadow:"none" }}>
        <Toolbar sx={{display:"flex"}}>
            <Logo />
            <div>{auth?.isLoggedIn? (
                <> 
                    <NavigationLink  to ="/chat" bg="#00fffc" textColor="black" text="Start the Chat"/>
                    <NavigationLink  to ="/" bg="#51528f" textColor="white" text="logout" onClick={auth.logout}/>
                </>) : (
            <>
             <NavigationLink  to ="/login" bg="#00fffc" textColor="black" text="login"/>
             <NavigationLink  to ="/signup" bg="#51528f" textColor="white" text="signup"/>
            </>
        ) } </div>
        </Toolbar>
    </AppBar>
)};

export default Header;