import firebase from "../firebase"
import { FunctionComponent as FC, useContext, useEffect, useState } from "react"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { AppContext } from "../App"
import { IProduct } from "../store/reducers/cart"
import { ShoppingCartIcon } from "@heroicons/react/solid"
import Logo from "../assets/logo512.png"

const Articles: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext)
  const [products, setProducts] = useState<IProduct[]>([]),
    [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      try {
        const allProducts = await firebase
          .firestore()
          .collection("products")
          .get()
        allProducts.forEach((product) => {
          setProducts((prevProduct) => [
            ...prevProduct,
            {
              id: product.id,
              name: product.data().name,
              description: product.data().description,
              qty: product.data().qty,
              price: product.data().price,
              img: product.data().img,
            },
          ])
        })

        setTimeout(() => setLoading(false), 1000)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  // useEffect(()=>{
  //   firebase.firestore().collection('products').add({
  //     name: "Articles " + Math.floor(Math.random() * 100),
  //     description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
  //           qty: Math.floor(Math.random() * 100),
  //           price: Math.floor(Math.random() * 100),
  //           img:
  //             "https://picsum.photos/200/110?random=" +
  //             Math.round(Math.random() * 1000),
  //   }).then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  // })
  // .catch((error) => {
  //     console.error("Error adding document: ", error);
  // });
  // }, [])

  return (
    <section>
      <Banner title="Découvrez tous les articles" />

      {loading ? (
        <div className="flex justify-center space-x-6 py-10">
          <img src={Logo} alt="Logo" className="h-12 w-12 animate-pulse" />
        </div>
      ) : (
        <section className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-auto gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <Link to={"/articles/" + product.id}>
                <div className="px-4 py-2">
                  <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                    {product.name}
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>

                <img
                  className="object-cover w-full h-48 mt-2"
                  src={product.img}
                  alt={"Photo de l'article" + product.name}
                />
              </Link>

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">
                  {product.price}
                </h1>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADDPRODUCT",
                      payload: { ...product, qty: 1 },
                    })
                  }
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  )
}

export default Articles
