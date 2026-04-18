import { useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'
import routes from '@/routes'

const defaultColorBg = 'purple-100'

/** Manages the `@/components/layout/ui/ColorNavBar` component */
const useColorNavBar = () => {
  const location = useLocation()
  const activeRoute = routes.find(item => item.path === location.pathname)
  const shouldHideNav = !activeRoute?.isNavVisible
  const colorBg = shouldHideNav ? 'invisible' : (activeRoute?.color || defaultColorBg)
  const selectedItem = activeRoute?.name || routes[0].name

  const containerStyles = cn(
    'flex flex-col sm:flex-row gap-5 justify-end',
    'w-full max-w-screen-lg p-4 border-2 border-stone-800 backdrop-blur-3xl rounded-lg mx-auto',
    'bg-gradient-to-r', colorBg,
  )

  return {
    routes,
    selectedItem,
    containerStyles,
  }
}

export default useColorNavBar
