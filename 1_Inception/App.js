/* <div id="parent">
    <div id="child1">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1child2 tag</h1>
        <h2>I'm an h2child2 tag</h2>
    </div>
</div> */
const innerChild11 = React.createElement("h1",{},"I'm an h1 tag");
const innerChild12 = React.createElement("h2",{},"I'm an h2 tag");

const innerChild21 = React.createElement("h1",{},"I'm an h1child2 tag");
const innerChild22 = React.createElement("h2",{},"I'm an h2child2 tag");

const normalChild1 = React.createElement("div",{id:"child1"},[innerChild11,innerChild12]);
const normalChild2 = React.createElement("div",{id:"child2"},[innerChild21,innerChild22]);

const parent1 = React.createElement("div",{id:"parent"},[normalChild1,normalChild2]);

//above is the simplest form of below...
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag"),
]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'm an h1child2 tag"),React.createElement("h2",{},"I'm an h2child2 tag"),
]),
])

//imp :  we can see above code is very ugly and hard to write, so that's why JSX is used/created. the above way is the core of react.

//  here we r creating a heading in react by using react.createElement api. In this method we have an element, object(here we give attributes to our tag), props(children)
            const heading = React.createElement("h1",{id:"heading", xyx:"abc"},"Hello World from React");

            // its a react element(react object). a react element is a js object. if we print we will see a object printed with many different key-values.
            //we have props, this r children.
            console.log(heading);
            //object(this obj is a react element)
            
            // important:ReactElement(is an Object) and its get converted into HTML by babel and render on the browser(browser understand)

            // now, we r creating a root to have changes in this react root. by using reactDom and createRoot method to create root and taking referring to the html div root.
            const root = ReactDOM.createRoot(document.getElementById("root"));

            // we r now using render method to display our heading on the root.
            // we r taking the heading object and putting it in the root and then using the root.render method to display on the browser/UI.
            root.render(parent);
            console.log(parent);//object
            // imp : the root.render replace all the content in the html div root(if present any content) with our root.render(parent) parent content.

