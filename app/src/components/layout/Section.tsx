import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ISection {
  /** Custom tailwind classes to append to the default container classes */
  className?: string;
  /** React components */
  children: ReactNode;
}

const Section = (props: ISection) => {
  const stylesSection = cn(
    "max-w-screen-lg min-h-75 w-full p-4 mx-auto text-justify border-0 lg:border lg:border-stone-200 rounded-xl",
    props?.className
  )

  return (
    <div className={stylesSection}>
      {props?.children}
    </div>
  )
}

export default Section
