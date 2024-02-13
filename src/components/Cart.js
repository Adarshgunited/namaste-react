import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
 
    // store we got from provider(app.js file)
    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {/* reuse ItemList component */}
                <ItemList items={cartItems} />
            </div>
            <div>
                <button className="p-2 m-2 bg-black text-white rounded-lg font-bold" onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>
            {cartItems.length === 0 && <h1 className="text-xl font-medium"> Cart is Empty. Please Add Items to Your Cart !!!</h1>}
            {cartItems.length === 0 && <Link to="/"><button className="p-2 m-2 bg-black text-white rounded-lg">Redirect to Home to Add Items</button></Link>}
        </div>
    );
}

export default Cart;
