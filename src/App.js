import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// lazy loading 
const Grocery = lazy(()=> import("./components/Grocery"));

const About = lazy(()=> import("./components/About"));

const AppLayout = () =>{

    //set the name in all files
    const [userName, setUserName] = useState();
 
    // authentication
    //assume we got data for to set the userName.
    useEffect(()=>{
        //make an api call and send username and password. 
        const data = {
            name:"Adarsh Gupta",
        }
        setUserName(data.name);
},[]);

    return(
        // provide our redux store
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
         <div className="app">
            <Header/>
        {/* placeholder or layout template for route-specific component */}
        <Outlet/>
        <Footer/>
    </div>
        </UserContext.Provider>
        </Provider>
    )
};

// component config
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // here we have created children route for our parent AppLayout, where our outlet is  changes w.r.to route.
        children: [
            {
                // this is the route/path
                path: "/",
                // the component to be rendered on this route/path.
                element: <Body/>

            },
            {
                path: "/about",
                // suspense for wrapping and show loading UI
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
        },
        {
        path: "/contact",
        element: <Contact/>
        },
        {
            // this is a dynamic route.
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
        },{
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        {
            path:"/cart",
            element: <Cart/>
        },
        ],
        //if invalid route searched then render it.
        errorElement: <Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

