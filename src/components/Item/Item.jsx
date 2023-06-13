import '../Item/Item.css'
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
const Item = ({id, name,img, price,stock}) => {
    return(
        <div className='card-contenedor'>
        <article className='card'>
            <header>
            <h2>{name}</h2>
            </header>
            <picture>
                <img className='img-Item' src={img} alt={name} />
                <section className='card-contenido'>
                    <p>
                        Precio: ${price}
                    </p>
                    <p>
                        Stock disponible:{stock}
                    </p>
                </section>
                <footer>
                <Link style={{backgroundColor:'black'}} to={`/item/${id}`}> Ver Detalle </Link>
                </footer>
                <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log(`Compraste ${quantity} items.`)}/>
            </picture>
        </article>
        </div>
    )
}

export default Item