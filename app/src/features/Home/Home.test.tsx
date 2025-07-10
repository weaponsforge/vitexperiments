import { render, screen } from "@testing-library/react"

import Home from "./Home"
import { IUseHomeReturn } from "./hooks/useHome"
import * as useHomeModule from "./hooks/useHome"

vi.mock("../hooks/useHome")

afterEach(() => {
  vi.clearAllMocks()
})

const renderHomeWithMock = (returnDataOverride: Partial<IUseHomeReturn>) => {
  vi.spyOn(useHomeModule, "default").mockReturnValue({
    data: [],
    error: null,
    isLoading: false,
    ...returnDataOverride
  })
}

describe("<Home />", () => {
  it("renders loading state", () => {
    renderHomeWithMock({ isLoading: true })
    render(<Home />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  it("renders content from data", () => {
    renderHomeWithMock({
      data: ["Paragraph 1", "Paragraph 2"]
    })

    render(<Home />)
    expect(screen.getByText("Paragraph 1")).toBeInTheDocument()
    expect(screen.getByText("Paragraph 2")).toBeInTheDocument()
  })

  it("renders fetch/data parsing error message", () => {
    const FETCH_ERROR = "Network Error"

    renderHomeWithMock({ error: FETCH_ERROR })
    render(<Home />)
    expect(screen.getByText(new RegExp(FETCH_ERROR, "i"))).toBeInTheDocument()
  })
})
