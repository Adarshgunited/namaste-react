import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Namaste React"),React.createElement("h2",{},"I'm an h2 tag"),
]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'm an h1child2 tag"),React.createElement("h2",{},"I'm an h2child2 tag"),
]),
])

//imp :  we can see above code is very ugly so that's why JSX is launched . 

//  here we r creating a heading in react by using react createElement api. in this method we have an element, object(here we give attributes to our tag), props(children)
            const heading = React.createElement("h1",{id:"heading", xyx:"abc"},"Hello World from React");

            //its a react element(react object). a react element is a js object. if we print we will see a object printed with many different key-values.
            //we have props, this r children.
            console.log(heading);
            //object(this obj is a react element)
            
            //important:ReactElement(is an Object) and its get converted into HTML by the browser(browser understand).

            
            //now, we r creating a root to have changes in this react root. by using reactDom and createRoot method to create root and taking referring to the html div root
            const root = ReactDOM.createRoot(document.getElementById("root"));
            // const root = ReactDom.createRoot(document.getElementById("root"));

            // we r now using render method to display our heading on the root.
            // we r taking the heading object and putting it in the root and then using the render method to display on the console
            root.render(parent);
            console.log(parent);//object
            // imp : the root.render replace all the content in the html div root(present any content)with our root.render(parent) parent content.

