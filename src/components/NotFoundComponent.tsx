import { Alert, AlertTitle } from "@mui/material";

const NotFound = () => {
    return(
        <>
            <Alert severity="error">
                <AlertTitle>Error 404</AlertTitle>
                This page is not found — <strong>check it out!</strong>
            </Alert>
        </>
    );
}

export default NotFound;