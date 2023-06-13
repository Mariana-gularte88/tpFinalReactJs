import { db } from '../services/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useContext } from 'react'
import { createContext } from 'react'
import { async } from '@firebase/util'
import { addDoc, documentId, getDocs, query, Timestamp, writeBatch } from 'firebase/firestore'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(createContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids= cart.map(prod => prod.id)
            const productsRef = colletion(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore 
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod =>prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { id: doc.id, ...dataDoc})
                    
                }
                
            })
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = colletion(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('ha productos que estan fuera de stock')
            }
        } catch (error)
        {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
    return <h1>Se esta cargando su orden...</h1>
    }
    
    if(orderId){
        return <h1>El id de su compra es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm= {createOrder}/>
        </div>
    )

}

export default checkout 