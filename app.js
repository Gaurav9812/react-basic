import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
//React Element
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
    className : "title"
  },
  "Heading 1"
);
console.log("hello");
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    key: "h2",
  },
  "heading 2"
);
//JSX
const heading3 = (
  <div>
    {" "}
    <h3 key="h3">3rd Heading</h3>
  </div>
);
const Heading4 = () => {
  return (
    <div key="h4">
      <h4>4th Heading</h4>
    </div>
  );
};
const Heading6 = () => {
  return <h4>6th Heading</h4>;
};
// console.log(heading4);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2, heading3, <Heading4 />]
);

const Heading5 = () => {
  return (
    <div>
      {container}
      <Heading6 />
      {Heading6()}
      <h5> This is 5th heading</h5>
    </div>
  );
};
// root.render(Heading5());
root.render(<Heading5 />);
