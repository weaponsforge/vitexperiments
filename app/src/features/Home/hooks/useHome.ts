import { useMemo } from "react"
import useSWR from "swr"
import { fetchPlaceholderText } from "@/lib/services/placeholder"
import { PLACEHOLDER_TEXT } from "@/lib/services/apiRoutes"

/** Manages the `@/features/Home` component */
const useHome = () => {
  const { data: response, error, isLoading } = useSWR(PLACEHOLDER_TEXT, fetchPlaceholderText)

  const data = useMemo(() => {
    return error
      ? []
      : response?.data || []
  }, [error, response])

  return {
    data,
    error,
    isLoading
  }
}

export default useHome
