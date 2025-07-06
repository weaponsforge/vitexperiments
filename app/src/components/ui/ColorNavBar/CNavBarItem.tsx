import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface ICNavBarItem {
  /** Flag indicating if the item is selected */
  isSeleted: boolean;
  /** Route segment parameter to the `<Link />` - `to` */
  route: string;
  /** Nav Menu item name */
  label: string;
}

const CNavBarItem = (props: ICNavBarItem) => {
  const { isSeleted = false, label = "", route = "/" } = props

  const linkStyle = cn(
    "text-stone-900 text-sm border-transparent border-b-2 hover:border-stone-800 hover:border-b-2 uppercase",
    isSeleted && "border-stone-800"
  )

  return (
    <Link
      className={linkStyle}
      to={route}
    >
      {label}
    </Link>
  )
}

export default CNavBarItem
