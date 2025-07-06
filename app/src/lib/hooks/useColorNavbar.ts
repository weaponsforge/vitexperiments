import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
import routes from "@/routes"

const defaultColorBg = "purple-100"

const useColorNavBar = () => {
  const [colorBg, setColorBg] = useState()
  const [selectedItem, setSelectedItem] = useState(routes[0].name)
  const location = useLocation()

  const containerStyles = cn(
    "flex flex-col sm:flex-row",
    "gap-5 justify-end max-w-screen-lg p-4 mb-4 mt-2 border-2 border-stone-800 rounded-lg mx-auto",
    "bg-gradient-to-r",
    colorBg
  )

  useEffect(() => {
    const activeRoute = routes.find(item => item.path === location.pathname)

    if (!activeRoute) return

    const colorBg = activeRoute?.color || defaultColorBg
    setColorBg(colorBg)
    setSelectedItem(activeRoute.name)
  }, [location])

  return {
    routes,
    selectedItem,
    containerStyles
  }
}

export default useColorNavBar
