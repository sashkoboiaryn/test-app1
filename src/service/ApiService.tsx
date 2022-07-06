import { IPost } from "../types/Types";
import React, {useState, useEffect} from 'react'; 
import axios from "axios";



    const [posts1, setPosts] = useState<IPost[]>([])

    useEffect(() => {

        fetchUsers()
        console.log('effect')
        
    },[])
    console.log(posts1)
    
    
    async function fetchUsers() {
        try{
        const responce = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(responce.data);
        
        }
        catch (e) {
        alert(e)
        }
    }
    