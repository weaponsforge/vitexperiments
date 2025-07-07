


import CNavBarItem from "./CNavBarItem"
import useColorNavBar from "@/lib/hooks/useColorNavbar"

const ColorNavBar = () => {
  const { routes, selectedItem, containerStyles } = useColorNavBar()

  const navItems = routes.map((route, id) => {
    const isSelected = route.name === selectedItem

    const navItem = route?.isNavVisible
      ? <CNavBarItem
        key={id}
        isSelected={isSelected}
        route={route?.path}
        label={route?.name}
      />
      : null

    return navItem
  }
  )

  return (
    <div className="sticky top-2 z-50 p-2 px-4 mb-2">
      <div className={containerStyles}>
        {navItems}
      </div>
    </div>
  )
}

export default ColorNavBar
