import { Outlet } from "react-router-dom"

import ColorNavBar from "@/components/ui/ColorNavBar"
import Footer from "@/components/ui/Footer"

const FullPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ColorNavBar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default FullPage
