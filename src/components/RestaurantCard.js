import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
    // console.log(resData);

    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData.info;
    

    // console.log(resData);

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-md shadow-lg" style = {{backgroundColor:"#f0f0f0"}}>
            <img
             className="rounded-lg" 
             alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="font-semibold py-2">{costForTwo} </h4>
            <h4 className="font-semibold py-2">{cuisines.join(", ")}</h4>
            <h4 className="font-semibold py-2">{avgRating} stars</h4>
            <h4 className="font-semibold py-2">{sla.deliveryTime} mins</h4>
            <h4 className=""></h4>
        </div>
    );
};

//Higher Order Component
//RestaurantCard(input) => RestaurantCardDiscount(output)

export const withVegLabel = (RestaurantCard) =>{
    //imp : return a component 
    return (props) => {
        // console.log(props);
        const {veg} = props.resData.info;
        // console.log(veg);
        return veg ? (
            <div>
                <label className="absolute bg-black text-white mx-4 p-2 rounded-lg font-bold">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        ) : (
            <div>
                <label className="absolute bg-black text-white mx-4 p-2 rounded-lg font-bold">NonVeg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;