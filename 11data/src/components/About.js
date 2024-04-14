import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <User name={"Ayushman (function)"}/>
                {/* <UserClass name={"Ayushman (class)"} location={"JBP"} /> */}
                <UserClass name={"Child 1"} location={"JBP"} />
                <UserClass name={"Child 2"} location={"JBP"} />
                <UserClass name={"Child 3"} location={"JBP"} />
            </div>
        )
    }
}


// const About = ()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <User name={"Ayushman (function)"}/>
//             <UserClass name={"Ayushman (class)"} location={"JBP"} />
//         </div>
//     )
// }

export default About;