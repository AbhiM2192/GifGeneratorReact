import React,{useState,useEffect} from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () =>{
    const [gif,setGif] = useState('')
    const [tag,setTag] = useState('dog')
    const fetchGif = async (tag) =>{
        const urls = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;
        const {data:{data:{images:{downsized_large:{url}}}}} = await axios.get(urls);
        console.log(url);
        const imageSrc = url
        setGif(imageSrc)
        
    }
    const handleClick = () =>{
        fetchGif(tag);
    }
    //COMPONENT DID MOUT -FIRST RENDER
    useEffect(() =>{ 
        fetchGif(tag);
    },[tag]);
    
    return <div className="container">
                <>
                <h1>Random tye {tag} GIF</h1>
                <img width="500" src={gif} alt="Random Gif" />
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)}/>
                <button onClick={handleClick}>Click for New</button>
                </>
            </div>
}
    


export default Tag