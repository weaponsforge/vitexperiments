import axios, { AxiosResponse } from "axios"
import { PLACEHOLDER_TEXT } from "./apiRoutes"

const fetchPlaceholderText = async (): Promise<AxiosResponse<string[]>> => {
  return await axios.get(PLACEHOLDER_TEXT)
}

export {
  fetchPlaceholderText
}
