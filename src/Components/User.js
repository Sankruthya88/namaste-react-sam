import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Helloooo");
    }, 1000);
    console.log("useeffect");

    return () => {
        clearInterval(timer);
      console.log("useeffect2 return");
    };
  }, []);
  console.log("render");

  return (
    <div className="user-card p-2.5 m-2.5 border-2">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Atl</h3>
      <h4>Contact: abc</h4>
    </div>
  );
};

export default User;
