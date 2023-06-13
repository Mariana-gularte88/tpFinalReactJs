import carrito from '../assets2/carrito.svg';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img src={carrito} alt="carrito-compras" />
      
      {totalQuantity}
      
    </Link>
  )
}

export default CartWidget

