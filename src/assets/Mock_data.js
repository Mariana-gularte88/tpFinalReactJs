const products = [
    {
        "id": 1,
        "name": "Borcegos" ,
        "price": 6000 ,
        "category": "Para Ellas" ,
        "img":'https://http2.mlstatic.com/D_NQ_NP_868211-MLA48925916750_012022-O.jpg' ,
        "stock": 10 ,
        "description": "Borcegos Negros Clasicos"
    },
    {
        "id": 2 ,
        "name": "Campera con diseño" ,
        "price": 10000,
        "category": "Para Ellas",
       "img": 'https://i.pinimg.com/236x/4d/a9/f6/4da9f688aefffbf481c4234fd92b88cb.jpg',
        "stock": 20 ,
        "description": "Camperas con Estampado"
        
        
        
    },

  {
        "id": 3 ,
        "name": "PijamaAliciaGato" ,
        "price": 4000 ,
        "category": "Para Ellas" ,
       "img": 'https://http2.mlstatic.com/D_NQ_NP_781947-MLA52981574830_122022-V.jpg',
        "stock": 10 ,
        "description": "Pijama super comodo para un descanso ideal"
    },

  {
        "id": 4 ,
        "name": "Pollera-bordada" ,
        "price": 8000,
        "category": "Para Ellas",
        "img": 'https://http2.mlstatic.com/D_NQ_NP_994127-MLA45873106485_052021-W.jpg',
        "stock": 10 ,
        "description": "Pollera con diseño bordado"
    },

  {
        "id": 5,
        "name": "Jean" ,
        "price": 2000 ,
        "category": "Para Ellas",
        "img": 'https://d2r9epyceweg5n.cloudfront.net/stores/147/727/products/905fa2bb-97a2-4f80-a4c8-ec34e58b476f1-397ccf3325ff54050f16304475232854-1024-1024.jpeg',
        "stock": 10 ,
        "description": "Jean clasico para cualquier ocasión"
        
    },

  {
        "id": 6 ,
        "name": "Short de Jean" ,
        "price": 6000 ,
        "category": "Para Ellas",
        "img": 'https://amjeans.com.ar/wp-content/uploads/2015/02/shorts-con-tachas.jpg',
        "stock": 10 ,
        "description": "Short fresco y comodo"
    },

    {
      "id": 7,
      "name": "Buzo" ,
      "price": 6000 ,
      "category": "Para Ellos",
      "img": 'https://www.sevenshoponline.com/uploads/ckeditor/pictures/625/content_sudadera-champion.jpg',
      "stock": 9 ,
      "description": "Buzo Blanco y Negro"
    },

    {
      "id": 8 ,
      "name": "Jardinero de Jean" ,
      "price": 16000 ,
      "category": "Unisex",
      "img": 'https://hips.hearstapps.com/es.h-cdn.co/hares/images/media/images/gallery-1489100044-hbz-hm-02/3795701-1-esl-ES/gallery-1489100044-hbz-hm-02.jpg?resize=320:*',
      "stock": 10 ,
      "description": "Jardinero de jean Unisex"
    }

  ]

 export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve(products)
    }, 500)
  })
 }

 
 export  const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === parseInt(productId)))
    }, 500);
  });
};

 export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
  })
 }




