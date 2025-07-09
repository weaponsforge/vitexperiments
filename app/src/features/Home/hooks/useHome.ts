import { useState, useEffect } from "react"
import useSWR from "swr"

import { fetchPlaceholderText } from "@/lib/services/placeholder"
import { HomeDataSchema } from "../schemas/Home.schema"
import { PLACEHOLDER_TEXT } from "@/lib/services/apiRoutes"

export const ERROR_PARSING_HOME_DATA = "Error parsing data"

/** Describes the return object shape of `useHome()` */
export interface IUseHome {
  /** Text content as paragraphs per item */
  data: string[];
  /** Data fetching or parsing error text */
  error: string | null;
  /** `swr` flag indicating an on-going data fetch */
  isLoading: boolean;
}

/** Manages the `@/features/Home` component */
const useHome = (): IUseHome => {
  const [dataError, setDataError] = useState<string | null>(null)
  const [data, setData] = useState<string[]>([])

  const { data: response, error, isLoading } = useSWR(PLACEHOLDER_TEXT, fetchPlaceholderText)

  useEffect(() => {
    if (isLoading) return

    if (error) {
      setDataError(error?.message)
      return
    }

    const result = HomeDataSchema.safeParse(response?.data)

    if (!result.success) {
      setDataError(ERROR_PARSING_HOME_DATA)
      return
    }

    setData(response!.data)
  }, [error, isLoading, response])

  return {
    data,
    error: dataError,
    isLoading
  }
}

export default useHome
