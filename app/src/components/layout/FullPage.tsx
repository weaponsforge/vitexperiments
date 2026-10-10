import { Outlet } from 'react-router-dom'

import { ColorNavBar } from '@/components/ui/ColorNavBar'
import { Footer } from '@/components/ui/Footer'

export function FullPage () {
  return (
    <div className="min-h-screen flex flex-col">
      <ColorNavBar />

      <div className="flex-1 p-1 md:p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
