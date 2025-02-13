const parent = React.createElement(
  "div",
  { id: "parent" }, [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h2", {}, "Hello Nested React"), React.createElement("h3", {}, "Hello array React")]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h2", {}, "Hello Nested React2"), React.createElement("h3", {}, "Hello array React2")]
      )
  ]
  
);

// const heading = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Hello from React"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
