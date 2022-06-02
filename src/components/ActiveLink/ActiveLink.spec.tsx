import { render } from "@testing-library/react"
import { ActiveLink } from "."

jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/"
            }
        }
    }
})

test("active link render correctly", () => {
    const { debug } = render(
        <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
        </ActiveLink>
    )

    debug()
})