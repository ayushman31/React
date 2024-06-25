import {useSelector} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    // const clearItems = () => {
    //     useSelector((item) => store.cart.items.length = 0)
    // }

    return (
        <div className="text-center m-4 p-4 ">


            <h1 className=" mb-16 text-2xl font-bold">Cart</h1>

            <div className="clearCart">
                <button onClick={clearCart}>Clear Cart</button>
            </div>

            <div className="p-10 w-3/4 h-auto m-auto">
                <ItemList items = {cartItems} />
            </div>
        </div>
    )
}

export default Cart;