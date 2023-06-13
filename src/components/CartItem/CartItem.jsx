import { useContext } from 'react';
import { CartContext} from '../Context/CartContext';
 
export const CartItem = ({ name, price, quantity, id }) => {
    const { removeItem } = useContext(CartContext)
    

    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>${price}</li>
                <li>{quantity}</li>
                <li>Subtotal: ${price*quantity}</li>
                <li><button onClick={() => removeItem(id)}>x</button></li>
                

            </ul>
        </div>
    )
}

export default CartItem