import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {

    //Local state variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    // copy/instance of listOfRestaurant
    const [filteredRestaurant,  setFilteredRestaurant] = useState([]);

    //Keeps track of the text entered in the search input.(bind the searchText with input box)
    const[searchText, setSearchText] = useState("");

    //higher order function, return a new component to RestaurantVegCard
    const RestaurantVegCard = withVegLabel(RestaurantCard);

    // console.log("body rendered",listOfRestaurant);

    //useEffect to fetch data when the component mounts
    useEffect(()=>{
    fetchData();
    },[]);

    //fn to fetch restaurant data from an api
    const fetchData = async() => {

        
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4256875&lng=72.8373771&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        // convert data to json format;
        const json = await data.json();

        // console.log(json);
        //Optional Chaining(?) - for better data handling.
        setListOfRestaurant(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
        
    }

    //custom hook(check oneLine)
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    return <h1>Look's like you're offline!!! Please check your internet connection.</h1>

    // import the setUserName fn from the App.js
    const {loggedInUser, setUserName} = useContext(UserContext);


    return listOfRestaurant.length === 0 ? (
        // Conditional rendering - display Shimmer component while data is being fetched
    <Shimmer/>
    ) : (
        // Render the component with fetched data
        <div className="body">
            <div className="flex items-center">
                <div className="m-4 p-4">
                    {/* Input box for searching */}
                    <input type="text" 
                    data-testid="searchInput"
                    className="border border-solid border-black rounded-md" value={searchText}
                    //it will take the input value from the input box and will change the searchText to that new value.
                     onChange={(e)=>{
                        // Update searchText state with the input value typed.
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 bg-green-500 m-4 rounded-lg"
                    //
                    onClick={()=>{
                        // console.log(searchText)
                        //Filter the restaurant cards logic and update the UI
                        //search text (includes() js method used to see the searchText in the res.data.name)
                        // Filter restaurant cards based on searchText
                        const filteredRestaurant = listOfRestaurant.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        
                        // Update filteredRestaurant state
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                {/* Button to filter top-rated restaurants */}
                <div className="m-4 p-4 flex items-center">
                    <button className="m-4 p-4 bg-gray-100 rounded-lg" onClick={()=>{
                 const filteredList = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating >= 4.2)
                 setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2" 
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div>

            <div className="flex flex-wrap">
                {
                    //  Mapping over filteredRestaurant to render RestaurantCard components 
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id}
                         to={"/restaurants/"+restaurant?.info.id}
                        >
                        {/* logic if the restaurant is having any discount then add the discount label to it. */}
                            {restaurant?.info?.veg ? (<RestaurantVegCard key={restaurant?.info.id}
                            resData={restaurant}/>) : (<RestaurantCard key={restaurant?.info.id} resData={restaurant}/>)}
                            </Link>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Body;