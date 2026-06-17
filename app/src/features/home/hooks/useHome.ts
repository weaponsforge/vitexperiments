import useSWR from 'swr'

import { PLACEHOLDER_TEXT } from '@/lib/services/apiRoutes'
import { fetchPlaceholderText } from '@/lib/services/placeholder'

import { HomeDataSchema } from '../schemas/Home.schema'

export const ERROR_PARSING_HOME_DATA = 'Error parsing data'

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
  const hasError = Boolean(error) || (!isLoading && !result.success)

  return {
    data: result.success ? result.data : [],
    error: hasError ? ERROR_PARSING_HOME_DATA : null,
    isLoading,
  }
}

export default useHome
