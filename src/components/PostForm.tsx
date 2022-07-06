import { Box, TextField, Button, Alert } from "@mui/material";
import React, {useState, useRef} from "react";


interface PostFormProps {
    onAdd(title: string, body: string): void,
       
}

export const PostForm: React.FC<PostFormProps> = props => {

    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)
    const [titleValue, setTitleValue] = useState('')
    const [bodyValue, setBodyValue] = useState('')
    

    const addHandler = (event: React.MouseEvent) => {

        if (titleValue && bodyValue !== '') {
        
            props.onAdd(titleValue,bodyValue)
        
            setTitleValue(titleValue)
            setBodyValue(bodyValue)

            setTitleValue('')
            setBodyValue('')
        }
        else (
            alert('Enter something...')
            
        )
    }

    return (
        <Box >
            <TextField 
                label="Enter title..." variant="filled"
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
            <Button 
                variant="text"
                onClick={addHandler}
            >Add New Post</Button>
        </Box>
    )
}