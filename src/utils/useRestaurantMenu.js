import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4256875&lng=72.8373771&restaurantId="+resId);
        const json = await data.json();
        // our data is present in json.data
        setResInfo(json);
        // console.log(json);
    };
    return resInfo;
};

export default useRestaurantMenu;
