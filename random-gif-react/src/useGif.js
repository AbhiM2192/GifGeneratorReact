import React,{useState,useEffect} from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_GIPHY_API_KEY;
const urls = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
const useGif = (tag) =>{
    const [gif,setGif] = useState('')
   
    const fetchGif = async (tag) =>{
        
        const {data:{data:{images:{downsized_large:{url}}}}} = await axios.get(tag ? `${urls}&tag=${tag}` : `${urls}`);
        console.log(url);
        const imageSrc = url
        setGif(imageSrc)
        
    }
    
    //COMPONENT DID MOUT -FIRST RENDER
    useEffect(() =>{ 
        fetchGif(tag);
    },[tag]);
    
    return {gif , fetchGif}
}
    


export default useGif