import { FunctionComponent as FC, useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { TrashIcon, PlusIcon, MinusSmIcon } from "@heroicons/react/solid"
import Banner from "./Banner"
import { useHistory } from "react-router-dom"

const Summary: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext),
    history = useHistory(),
    [total, setTotal] = useState<number>()

  useEffect(() => {
    if (state.length <= 0) {
      history.push("/articles")
    }
  }, [state])

  useEffect(()=>{
    let t = 0
    state.map(x => 
      setTotal(t = t + (x.qty*x.price))
    )
  }, [state])

  return (
    <section>
      <Banner title="Checkout" />
      <section className="px-5 flex flex-col space-y-10">
        
        {
          state.length > 0 ?
          
        state.map((product) => (
          <section
            key={product.id}
            className="flex shadow-sm p-2 justify-between items-center"
          >
            <div className="px-3 flex items-center">
              <img
                className="w-8 h-8 rounded-full my-auto mr-4"
                src={product.img}
                alt=""
              />
              <div>
                <p className="min-w-max">{product.name}</p>
                <p className="text-sm text-gray-500">
                  {product.price * product.qty}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MinusSmIcon className="w-5 h-5" onClick={() => dispatch({
                    type: "DECREMENTPRODUCT",
                    payload: { ...product, qty: 1 },
                  })} />
              <p className="font-medium ml-10 text-gray-400">{product.qty}</p>
              <PlusIcon className="w-5 h-5" onClick={() => dispatch({
                    type: "INCREMENTPRODUCT",
                    payload: { ...product, qty: 1 },
                  })} />
            </div>
          </section>
        ))
                : ""
      }
        <div className="flex flex-col items-end space-y-4 py-5">
          <p className="font-semibold text-xl">Total : {total}</p>
          <button className="px-5 py-2 bg-green-400 text-white rounded-md">
            Valider
          </button>
        </div>
      </section>
    </section>
  )
}

export default Summary
