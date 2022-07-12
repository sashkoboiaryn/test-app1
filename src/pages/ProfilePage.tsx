import React from "react";
import { useEffect } from "react";
import { Card, CardHeader, Typography, Container } from "@mui/material";
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
          <CardHeader title={user.username} />
          <Typography sx={{ ml: 2 }}>
            <Typography variant="h6">Name:</Typography>
            {user.name}
            <br /> <br />
            <Typography variant="h6">Email:</Typography>
            {user.email}
            <br /> <br />
            <Typography variant="h6">Address:</Typography>
            City: {user.address.city}
            <br />
            Street: {user.address.street}
            <br />
            ZipCode: {user.address.zipcode}
            <br /> <br />
            <Typography variant="h6">Contacts:</Typography>
            Phone: {user.phone}
            <br />
            Website: {user.website}
            <br /> <br />
            <Typography variant="h6">Company:</Typography>
            Name: {user.company.name}
            <br />
            Catch Phrase: {user.company.catchPhrase}
          </Typography>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
