import { renderHook, waitFor } from "@testing-library/react"
import { type Mock } from "vitest"
import useSWR from "swr"

import useHome from "./useHome"
import { ERROR_PARSING_HOME_DATA, IUseHomeReturn } from "./useHome"

interface IUseHomeMock extends IUseHomeReturn {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

vi.mock("swr", () => ({
  default: vi.fn()
}))

const mockUseSWR = (returnValue: IUseHomeMock) => {
  (useSWR as unknown as Mock).mockReturnValue(returnValue)
}

afterEach(() => {
  vi.clearAllMocks()
})

describe("useHome() hook", () => {
  it("should return parsing error on invalid response", async() => {
    const mockResponse = {
      data: { not: "expected format" }
    }

    mockUseSWR({
      data: mockResponse,
      error: null,
      isLoading: false
    })

    // Run the hook
    const { result } = renderHook(() => useHome())

    // Await for useEffect(s) to run
    await waitFor(() => {
      expect(result.current.error).toBe(ERROR_PARSING_HOME_DATA)
      expect(result.current.data).toEqual([])
    }, { timeout: 1000 })
  })
})
