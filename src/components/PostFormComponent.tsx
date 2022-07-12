import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import useGlobalState from "../state/State";
import { IPost } from "../types/Types";

export const PostForm: React.FC = () => {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [, setLocalPosts] = useGlobalState("localPosts");

  const addPost = () => {
    const newPost: IPost = {
      userId: 11,
      id: Date.now(),
      title: titleValue,
      body: bodyValue,
    };
    if (titleValue && bodyValue !== "") {
      setLocalPosts((prev) => [newPost, ...prev]);
      setTitleValue("");
      setBodyValue("");
      setOpen(false);
    } else alert("Enter something...");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ mb: -6, display: "grid", justifyContent: "flex-end", zIndex: 2 }}
    >
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new post</DialogTitle>
        <DialogContent>
          <DialogContentText>Here you may write your post</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Enter title..."
            type="text"
            fullWidth
            variant="standard"
            value={titleValue}
            placeholder="Enter something..."
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="body"
            label="Write post..."
            type="text"
            fullWidth
            variant="standard"
            value={bodyValue}
            placeholder="Enter something..."
            onChange={(e) => setBodyValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addPost}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
