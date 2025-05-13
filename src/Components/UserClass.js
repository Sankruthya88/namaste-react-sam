import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        loaction: "dumm",
      },
    };
    console.log(this.props.name + "Child consructor is called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sankruthya88");
    const json = await data.json();

    this.setState({userInfo:json});
    // console.log(this.props.name+ "Child component did mount is called");
    //Api call
    // this.timer=setInterval(() => {
    //     console.log("Helloooo");
    // },1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component did unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;
    console.log(name + "Child render is called");

    return (
      <div className="user-card p-2.5 m-2.5 border-2">
        {/* <h2>Count:{count}</h2>
        <button className="border-2"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increment
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: abc</h4>
      </div>
    );
  }
}

export default UserClass;
