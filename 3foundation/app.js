import React from "react";
import  ReactDOM from "react-dom/client"; 

// const heading = React.createElement( "h1",
//     {id : "heading"},
//     "Namaste React"
// );

// console.log(heading);

// const jsxHeading = (
//     <h1 id="heading" className="head" tabIndex="5">
//         This is JSX Heading.
//     </h1>);

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

//Component Composition

const Title = () => <h1 id="title">Namaste React</h1>;

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">
            React Functional Component.
        </h1>
    </div>
);

root.render(<HeadingComponent />);