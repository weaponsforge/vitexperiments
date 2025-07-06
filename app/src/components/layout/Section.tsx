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
    "max-w-screen-lg min-h-75 p-4 mx-auto border border-stone-200 rounded-xl", props?.className
  )

  return (
    <div className={stylesSection}>
      {props?.children}
    </div>
  )
}

export default Section
