import { Box, TextField, Button, Typography, Card } from "@mui/material";
import React, {useState, useRef} from "react";


interface PostFormProps {
    onAdd(title: string, body: string): void;      
}

export const PostForm: React.FC<PostFormProps> = props => {

    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)
    const [titleValue, setTitleValue] = useState('')
    const [bodyValue, setBodyValue] = useState('')
    

    const addHandler = (event: React.MouseEvent) => {

        if (titleValue && bodyValue !== '') {        
            props.onAdd(titleValue,bodyValue);        
            setTitleValue(titleValue);
            setBodyValue(bodyValue);
            setTitleValue('');
            setBodyValue('');
        }
        else (
            alert('Enter something...')           
        );
    }

    return (
        <Box sx={{m: 5, display: 'grid', justifyContent: 'center'  }} >
            <Typography variant='h6' >
                Enter new post
            </Typography>
            <Card sx={{p:1}}>
                <TextField 
                    label="Enter title..." variant="outlined"
                    ref={titleRef}
                    type='text'
                    id='title' 
                    value={titleValue}
                    placeholder="Enter something..."
                    onChange={(e) => setTitleValue(e.target.value)}
                />
                <TextField 
                    
                    label="Enter text..." variant="filled"
                    ref={bodyRef}
                    type='text'
                    id='body' 
                    value={bodyValue}
                    placeholder="Enter something..."
                    onChange={(e) => setBodyValue(e.target.value)}
                />
                <Button sx={{minHeight: 56}}
                    variant="text"
                    onClick={addHandler}
                >Add New Post</Button>
                </Card>
        </Box>
    );
}