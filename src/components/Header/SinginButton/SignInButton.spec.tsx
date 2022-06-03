import { render, screen } from "@testing-library/react"
import { mocked } from 'jest-mock'
import { useSession } from "next-auth/react"
import { SinginButton } from "."

jest.mock("next-auth/react")

describe("SignInButton component", () => {

    it("renders correctly when user is not authenticated", () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce({ data: null } as any)

        render(<SinginButton />)

        expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
    })

    it("renders correctly when user is authenticated", () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce({
            data: {
                user: { name: "John Doe", email: "john.doe@example.com" },
                expires: "fake-expires",
            },
        } as any)

        render(<SinginButton />)

        expect(screen.getByText("John Doe")).toBeInTheDocument();
    })
})


