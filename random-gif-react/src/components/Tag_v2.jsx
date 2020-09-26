import React,{useState} from 'react';
import useGif from '../useGif'
function Tag_v2() {
    const [tag,setTag] = useState('dog');
    const{gif,fetchGif} = useGif(tag)
    return (
        <div className="container">
                <>
                <h1>Random tye {tag} GIF</h1>
                <img width="500" src={gif} alt="Random Gif" />
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)}/>
                <button onClick={() => fetchGif(tag)}>Click for New</button>
                </>
            </div>
    )
}

export default Tag_v2
