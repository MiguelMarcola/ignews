import { render, screen } from "@testing-library/react"
import { mocked } from "jest-mock"
import { FaAlignJustify } from "react-icons/fa"
import Posts, { getStaticProps } from "../../pages/posts"
import { stripe } from "../../services/stripe"

jest.mock("next/router")
jest.mock("next-auth/react", () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})

jest.mock("../../services/stripe")

describe("Posts page", () => {
    it("renders correctly", () => {
        render(
            <Posts />
        )

        expect(screen.getByText("for $10.00 month")).toBeInTheDocument();
    });

    it("loads initial data", async () => {
        const retriveStripePricesMocked = mocked(stripe.prices.retrieve)

        retriveStripePricesMocked.mockResolvedValueOnce({
            id: "fake-price-id",
            unit_amount: 1000,
        } as any)

        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    product: {
                        priceId: "fake-price-id",
                        amount: "$10.00"
                    }
                }
            })
        )
    })
})

