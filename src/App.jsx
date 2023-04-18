import React, { useState } from 'react';

const App = () =>{
    const [name,cName]=useState("");
    const [fullName,cFullName]=useState("");

    const inputEvent = (event) => {
        cName(event.target.value);
    };

    const setClick = () => {
        cFullName(name);
    }
    return(
       <>
       <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name}></input>
        <button onClick={setClick}>Click Me</button>
       </div>
       </>
    );

};

export default App;