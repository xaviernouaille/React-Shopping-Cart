import firebase from "../firebase"
import { FunctionComponent as FC, useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { IProduct } from "../store/reducers/cart"
import { useParams } from "react-router"
import { Link, useHistory } from "react-router-dom"
import { ShoppingCartIcon, ArrowLeftIcon } from "@heroicons/react/solid"

const SingleArticle: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext),
    [product, setProduct] = useState<IProduct>()

  const { id }: { id: string } = useParams()
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      try {
        const fetchedProduct = await firebase
          .firestore()
          .collection("products")
          .doc(id)
          .get()
        if (fetchedProduct.exists) {
          setProduct({
            id: fetchedProduct.id,
            name: fetchedProduct?.data()?.name,
            description: fetchedProduct?.data()?.description,
            qty: fetchedProduct?.data()?.qty,
            price: fetchedProduct?.data()?.price,
            img: fetchedProduct?.data()?.img,
          })
        } else {
          history.push("/articles")
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <section>
      {/* <Banner title="Article!" /> */}
      <div className="mb-5 px-6 flex space-x-2 items-center">
        <ArrowLeftIcon className="h-5 w-5" />
        <Link to="/articles">Retour aux articles</Link>
      </div>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg">
          <div className="flex-grow">
            <div className="bg-cover lg:rounded-lg h-full">
              <img
                className="w-full h-full"
                src={product?.img}
                alt={"Photo de l'article" + product?.name}
              />
            </div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {product?.name}
              {/* <span className="text-indigo-600 dark:text-indigo-400">Idea</span> */}
            </h2>
            {Number(product?.qty) < 10 ? (
              <p className="py-3 text-red-600 animate-pulse">
                Plus que {product?.qty}{" "}
                {Number(product?.qty) == 1 ? "article" : "articles"} en stock.
              </p>
            ) : (
              ""
            )}
            <p className="mt-3 font-medium text-gray-500">{product?.price}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {product?.description}
            </p>
            <div className="mt-8">
              <button
                className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
                onClick={() =>
                  dispatch({
                    type: "ADDPRODUCT",
                    payload: { ...product, qty: 1 },
                  })
                }
              >
                <ShoppingCartIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SingleArticle
