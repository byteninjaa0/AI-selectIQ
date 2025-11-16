import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "@/components/ui/button";
import "@testing-library/jest-dom"

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies default variant and size classes", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button")

    // base classes should exist
    expect(btn).toHaveClass("inline-flex")
    expect(btn).toHaveClass("items-center")
    expect(btn).toHaveClass("justify-center")

    // default variant should have primary bg classes
    expect(btn).toHaveClass("bg-primary")
  })

  it("applies variant classes when variant='destructive'", () => {
    render(<Button variant="destructive">Delete</Button>)
    const btn = screen.getByRole("button")

    // Check part of destructive styles
    expect(btn).toHaveClass("bg-destructive")
  })

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders using Slot when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Go Link</a>
      </Button>
    )

    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })
})