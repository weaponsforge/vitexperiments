import { render, screen } from "@testing-library/react"
import About from "./About"

describe("About component", () => {
  it("renders About title", () => {
    render(<About />)
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument()
  })
})
