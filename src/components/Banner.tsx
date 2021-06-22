import { FunctionComponent as FC } from "react"

const Banner: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <section className="h-52 background-opacity-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center mb-10">
      <h1 className="text-5xl font-semibold text-white px-3 md:px-0">{title}</h1>
    </section>
  )
}

export default Banner
