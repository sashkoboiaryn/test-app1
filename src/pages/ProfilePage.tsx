import React from "react";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import useGlobalState from "../state/State";
import ApiService from "../service/ApiService";

const Profile: React.FC = () => {
  const [user, setUser] = useGlobalState("user");

  useEffect(() => {
    ApiService.fetchUser().then((res) => setUser(res));
  }, []);

  return (
    <>
      <Container sx={{ justifyContent: "center", display: "flex" }}>
        <Card sx={{ mt: 12, p: 4, width: 500, minHeight: 500, boxShadow: 5 }}>
          <CardHeader title={user.username} sx={{ ml: 2 }} />
          <CardContent sx={{ ml: 2 }}>
            <Typography variant="h6">Name:</Typography>
            <Typography>{user.name}</Typography>
            <br /> <br />
            <Typography variant="h6">Email:</Typography>
            <Typography>{user.email}</Typography>
            <br /> <br />
            <Typography variant="h6">Address:</Typography>
            <Typography>
              City: {user.address.city}
              <br />
              Street: {user.address.street}
              <br />
              ZipCode: {user.address.zipcode}
            </Typography>
            <br /> <br />
            <Typography variant="h6">Contacts:</Typography>
            <Typography>
              Phone: {user.phone}
              <br />
              Website: {user.website}
            </Typography>
            <br /> <br />
            <Typography variant="h6">Company:</Typography>
            <Typography>
              Name: {user.company.name}
              <br />
              Catch Phrase: {user.company.catchPhrase}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
