import React from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }

    render(){
        //console.log("Parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User : 
                    <UserContext.Consumer>
                        {
                            ({loggedInUser}) => (
                                <h1 className='text-xl font-bold'>{loggedInUser}</h1>
                            )
                        }
                    </UserContext.Consumer>
                </div>
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