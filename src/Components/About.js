import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor is called");
  }

  componentDidMount() {
    console.log("parent component did mount is called");
    //Api call`
  }

  render() {
    console.log("parent Render is called");

    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Sam adda</h2>
        <User name={"Sam(fn)"}/>
        <UserClass name={"First"} location={"Hyd class"} />
      </div>
    );
  }
}

export default About;
