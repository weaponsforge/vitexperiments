import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import FullPage from "@/components/layout/FullPage"
import routes from "@/routes"

const App = () => {
  const routeComponents = routes.map(({ path, component: Component }, id: number) => (
    <Route key={id} path={path} element={<Component />} />
  ))

  return (
    <Router>
      <FullPage>
        <Routes>
          {routeComponents}
        </Routes>
      </FullPage>
    </Router>
  )
}

export default App
