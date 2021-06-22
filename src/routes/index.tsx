import react, { FunctionComponent as FC } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Accueil from "../components/Accueil"
import Articles from "../components/Articles"
import SingleArticle from "../components/SingleArticle"
import Summary from "../components/Summary"

interface IRoute {
  name: string
  path: string
  components: react.FC
  nav: boolean
}

export const routes: IRoute[] = [
  {
    name: "Accueil",
    path: "/accueil",
    components: Accueil,
    nav: true,
  },
  {
    name: "Articles",
    path: "/articles",
    components: Articles,
    nav: true,
  },
  {
    name: "Single Article",
    path: "/articles/:id",
    components: SingleArticle,
    nav: false,
  },
  {
    name: "Summary",
    path: "/summary",
    components: Summary,
    nav: false,
  },
]

const RoutesWrapper: FC = (): JSX.Element => {
  return (
    <main className="my-10 flex-grow">
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            component={route.components}
            exact
          />
        ))}
        <Route path="*">
          <Redirect to="/accueil" />
        </Route>
      </Switch>
    </main>
  )
}

export default RoutesWrapper
