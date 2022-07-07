import axios from "axios";
import {IUser} from '../types/Types';
import { useState, useEffect } from "react";
import {Box,  Card, CardHeader, CardContent, Typography,} from "@mui/material";



interface ProfileProps {
    userdata: IUser;
    isActive: Boolean;
    setIsActive: (active: boolean) => void;
}

const Profile: React.FC<ProfileProps> = (props) => {
  
    return(
        <div 
            className={props.isActive ? 'profileBox active' : "profileBox"}
            onClick={() => props.setIsActive(false)}
         >
            <Card className='profileContent' onClick={e => e.stopPropagation()}>
                <CardHeader
                     title={props.userdata.username}
                />
                <Typography sx={{ml: 2}}>
                    Name:<br/>
                        {props.userdata.name}
                    <br/><br/>
                    Email: <br/>
                        {props.userdata.email}
                </Typography>
            </Card>
        </div>
    )
}

export default Profile