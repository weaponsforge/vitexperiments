import useSWR from "swr"

import { fetchPlaceholderText } from "@/lib/services/placeholder"
import { HomeDataSchema } from "../schemas/Home.schema"
import { PLACEHOLDER_TEXT } from "@/lib/services/apiRoutes"

export const ERROR_PARSING_HOME_DATA = "Error parsing data"

/** Describes the return object shape of `useHome()` */
export interface IUseHomeReturn {
  /** Text content as paragraphs per item */
  data: string[];
  /** Data fetching or parsing error text */
  error: string | null;
  /** `swr` flag indicating an on-going data fetch */
  isLoading: boolean;
}

/** Manages the `@/features/Home` component */
const useHome = (): IUseHomeReturn => {
  const { data: response, error, isLoading } = useSWR(PLACEHOLDER_TEXT, fetchPlaceholderText)
  const result = HomeDataSchema.safeParse(response?.data)

  return {
    data: result.success ? result.data : [],
    error: error ? ERROR_PARSING_HOME_DATA : null,
    isLoading
  }
}

export default useHome
