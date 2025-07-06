import { useMemo } from "react"
import { useLocation, Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import routes from "@/routes"

const defaultColorBg = "purple-100"

const ColorNavBar = () => {
  const location = useLocation()

  const containerStyles = useMemo(() => {
    const activeRoute = routes.find(item => item.path === location.pathname)
    const colorBg = activeRoute?.color || defaultColorBg

    return cn(
      "flex flex-col sm:flex-row",
      "gap-5 justify-end max-w-screen-lg p-4 mb-4 border-2 border-stone-800 rounded-lg mx-auto",
      "bg-gradient-to-r",
      colorBg
    )
  }, [location])


  const navItems = routes.map((route, id) => {
    const navItem = route?.isNavVisible
      ? <Link
        key={id}
        to={route.path}
        className="text-stone-900 text-sm border-transparent border-b-2 hover:border-stone-800 hover:border-b-2 uppercase"
      >
        {route.name}
      </Link>
      : null

    return navItem
  }
  )

  return (
    <div className={containerStyles}>
      {navItems}
    </div>
  )
}

export default ColorNavBar
