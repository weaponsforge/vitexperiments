import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import FullPage from "@/components/layout/FullPage"
import NotFound from "@/components/ui/NotFound"
import routes from "@/routes"

const App = () => {
  const routeComponents = routes.map((route, id: number) => {
    const { component: Component, isNavVisible, path } = route

    return isNavVisible
      ? <Route key={id} path={path} element={<Component />} />
      : null
  })

  return (
    <Router>
      <FullPage>
        <Routes>
          {routeComponents}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FullPage>
    </Router>
  )
}

export default App
