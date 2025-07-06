import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ColorNavBar from "@/components/ui/ColorNavBar"
import routes from "@/routes"

const App = () => {
  return (
    <div className="w-full">
      <Router>
        <ColorNavBar />

        <Routes>
          {routes.map(({ path, component: Component }, id: number) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App
