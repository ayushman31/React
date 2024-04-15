import { count } from "console";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
   // console.log(props);
    this.state = {
      userInfo: {
        name: "UserName",
        location: "UserLocation"
      }
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount(){
    //console.log(this.props.name + "Child Component Did Mount");

    const data =await fetch("https://api.github.com/users/ayushman31")
    const json =await data.json();

    //console.log(json);

    this.setState({
        userInfo: json,
    });
  }

  render() {
    // const { name, location } = this.props;
    // const {count, count2} = this.state;
    const {name , location, avatar_url} = this.state.userInfo;
    // debugger;
    //console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count= {count}</h1>
        <h1>Count2= {count2}</h1>
        <button className="user-btn" onClick={()=>{
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
            })
        }}></button> */}
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>@ayushman3105</h3>
      </div>
    );
  }
}

export default UserClass;
