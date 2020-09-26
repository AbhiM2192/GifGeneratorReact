import React from 'react';
import useGif from '../useGif'

function Random_v2() {
    const{gif,fetchGif} = useGif()
    return (
        <div className="container">
                <>
                <h1>Random</h1>
                <img width="500" src={gif} alt="Random Gif" />
                <button onClick={fetchGif}>Click for New</button>
                </>
            </div>
    )
}

export default Random_v2
