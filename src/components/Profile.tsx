import axios from "axios";
import {IUser} from '../types/Types';
import { useState, useEffect } from "react";
import {Box, Container} from "@mui/material";



interface ProfileProps {
    userdata: IUser;
    
}



const Profile: React.FC<ProfileProps> = (props) => {
  
    return(
        <Container maxWidth='sm' className="profileBox">
            <Box sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',}}
                className="profileContent"> 
                    Profile Data {props.userdata.id}
                </Box>
        </Container>
    )
}

export default Profile