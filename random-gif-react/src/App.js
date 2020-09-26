import React from 'react'

import './App.css'
import Tag from './components/Tag_v1';
import Random from './components/Random_v1'
import Random_v2 from './components/Random_v2';
import Tag_v2 from './components/Tag_v2';


function App() {
    return (
        <div>
            <h1>Random GIF generator</h1>
            <div className="main-container">
                {/* <Random/>
                <Tag/> */}
                <Random_v2/>
                <Tag_v2/>
            </div>
        </div>
    )
}

export default App
