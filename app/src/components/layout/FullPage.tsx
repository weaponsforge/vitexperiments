import { ReactNode } from "react"

import ColorNavBar from "@/components/ui/ColorNavBar"
import Footer from "@/components/ui/Footer"

const FullPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ColorNavBar />

      <div className="flex-1">
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default FullPage
