import React from "react";
import ReactDOM from "react-dom/client";

//  (=> assume arrow sign means convert.)
//react element = object => htmlElement(root.render do it)

//React.createElement give us a  reactElement and at the end of the day reactElement is a JS object and this js object is render as an html element.
const heading = React.createElement("h1",{id:"heading",className:"head"},"Namaste React using jsx.");
//the above code is same as below code ...
console.log(heading);

//Jsx is get converted into react.createElement by babel and then the react.createElement is get converted into React.Element and is a JS Object which is render as an html element on the browser by root.render method.

// In summary, JSX is transformed into React.createElement, which creates ReactElement objects representing the virtual DOM. These are then used to efficiently update the real DOM using the reconciliation process, and ReactDOM.render is the method responsible for rendering the virtual DOM to the actual DOM on the web page.

//JSX => Babel transpile it to React.createElement => React.Element-JS Object => HTMLElement(render)

//JSX(transpiled means convert before it reaches the Js engine) - Parcel - babel
//NOTE: JSX - is html-like or xml-like syntax.
//React element - const variable - its has an object
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using jsx.
</h1>
console.log(jsxHeading);
// the heading above and jsxHeading are reactElement and are same, both are object, see on console.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

const HeadingComponent = () =>{
    return <h1 className="heading">Functional Component</h1>
}
//another way of writing our above code is : 
// 1st way
const HeadingComponent1 = () =>(
    <h1 className="heading">Functional Component</h1>
);
//2nd way
const HeadingComponent2 =()=> <h1 className="heading">Functional Component</h1>

// jsx can be nested.
const HeadingsComponent = () => (
    <div id="container">
    <h1 className="heading">Functional Component</h1>
    </div>
);
//react element 
const headings = (<h1 id="heading" className="head" tabIndex="1">Namaste React using jsx.</h1>)
console.log(jsxHeading);

//to convert above react element into functional component is by making the headings first word capital(optional) and convert it to arrow function(mandatory). see below
//react functional component
const Headings = () => (<h1 id="heading" className="head" tabIndex="1">Namaste React using jsx.</h1>);
console.log(Headings);

const Title = () => (<h1 id="heading" className="head" tabIndex="1">Namaste React using jsx.</h1>);

//to render above title component into our Headings component then we just insert it like: <Title/>
//here we have done component composition(one component inside another component)
const HeadingComponents = () => (
    <div id="container">
        {/* render a functional component inside another functional component */}
        <Title/>
    <h1 className="heading">Functional Component</h1>
    </div>
);