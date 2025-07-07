import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import FullPage from "@/components/layout/FullPage"
import NotFound from "@/components/ui/NotFound"
import routes from "@/routes"

const App = () => {
  const pagesWithNavBar = routes.map((route, id: number) => {
    const { component: Component, isNavVisible, path } = route

    return isNavVisible
      ? <Route key={id} path={path} element={<Component />} />
      : null
  })

  const otherPages = routes
    .filter(route => !route?.isNavVisible)
    .map((route, id) => (
      <Route key={id} path={route.path} element={<route.component />} />
    ))

  return (
    <Router>
      <Routes>
        {/** Routes without FullPage */}
        {otherPages}

        {/** Routes with FullPage navbar/footer */}
        <Route element={<FullPage />}>
          {pagesWithNavBar}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
