import { useState, useEffect } from 'react' ;
// import { getProducts, getProductsByCategory} from '../assets/Mock_data';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';
import {db} from './services/firebaseConfig';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

    useEffect(() => {
  setLoading(true)
  const colletionRef =categoryId
  ? query(colletion(db, 'products'), where('category', '==', categoryId))
  : colletion(db, 'products')
  getDocs(colletionRef)
  .then(response => {
    const productsAdapted = response.docs.map(doc => {
      const data = doc.data()
      return { id: doc.id, ...data}
    })
    setProducts(productsAdapted)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=> {
    setLoading(false)
  })
      
  }, [categoryId])
  return (
    <>
    <h1>{greeting}</h1>
    <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer