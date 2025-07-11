import { ComponentType } from "react"

import {
  About,
  Contact,
  FullPicture,
  Home,
  Login
} from "@/features"

type RouteItem = {
  /** Route path */
  path: string;
  /** Component or page title */
  name: string;
  /** Dominant gradient color (using Tailwind color names) */
  color?: string;
  /** Flag indicating if name is visible in the ColorNavBar */
  isNavVisible: boolean;
  /** React component */
  component: ComponentType;
}

const routes: RouteItem[] = [
  {
    path: "/about",
    name: "About",
    color: "from-teal-100 to-cyan-200",
    isNavVisible: true,
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    color: "from-amber-100 to-orange-200",
    isNavVisible: true,
    component: Contact
  },
  {
    path: "/full",
    name: "Full Picture",
    color: "from-orange-100 to-red-200",
    isNavVisible: false,
    component: FullPicture
  },
  {
    path: "/login",
    name: "Login",
    color: "from-blue-100 to-indigo-200",
    isNavVisible: true,
    component: Login
  },
  {
    path: "/",
    name: "Home",
    color: "from-purple-100 to-pink-200",
    isNavVisible: true,
    component: Home
  }
]

export default routes
