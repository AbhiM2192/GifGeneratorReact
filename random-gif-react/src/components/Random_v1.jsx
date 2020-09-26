import React,{useState,useEffect} from 'react';
import axios from 'axios';

//API KEY
const api_key = process.env.REACT_APP_GIPHY_API_KEY

const Random = () =>{
    const [gif,setGif] = useState('')
    const fetchGif = async () =>{
        const urls = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
        const {data:{data:{images:{downsized_large:{url}}}}} = await axios.get(urls);
        console.log(url);
        const imageSrc = url
        setGif(imageSrc)
        
    }
    const handleClick = () =>{
        fetchGif();
    }
    //COMPONENT DID MOUT -FIRST RENDER
    useEffect(() =>{ 
        fetchGif();
    },[]);
    
    return <div className="container">
                <>
                <h1>Random</h1>
                <img width="500" src={gif} alt="Random Gif" />
                <button onClick={handleClick}>Click for New</button>
                </>
            </div>
}
    


export default Random