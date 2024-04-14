import React, { useState } from "react";

const User = (props)=>{
    
    const[count] = useState(0);
    const[count2] = useState(1);
    
    //we can also just use destructure on the fly: const User = ({name})=> {
    return( 
        <div className="user-card">            
            <h1>Count = {count}</h1>               
            <h1>Count2 = {count2}</h1>               
            <h1>{props.name}</h1>               
            <h2>JBP</h2>
            <h3>@ayushman3105</h3>
        </div>
    )                                    //and in h1 we'll write just: <h1>{name}</h1>
}

export default User;