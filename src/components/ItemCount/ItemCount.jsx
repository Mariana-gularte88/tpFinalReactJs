import '../ItemCount/ItemCount.css'
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className='contenedor-contador'>
            <div className='button'>
                <button className='restar' onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className='sumar' onClick={increment}>+</button>
            </div>
            <div>
                <button  className='carrito' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount 