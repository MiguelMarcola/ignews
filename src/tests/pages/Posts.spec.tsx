import { render, screen } from "@testing-library/react"
import { mocked } from "jest-mock"
import { FaAlignJustify } from "react-icons/fa"
import Posts, { getStaticProps } from "../../pages/posts"
import { getPrismicClient } from "../../services/prismic"

jest.mock("next/router")
jest.mock("next-auth/react", () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})
jest.mock("../../services/prismic")

const posts = [{ slug: "my-new-post", title: "My new post", exerpt: "Post exerpt", updatedAt: "10 de Abril" }];

describe("Posts page", () => {
    it("renders correctly", () => {
        render(
            <Posts posts={posts} />
        )

        expect(screen.getByText("My new post")).toBeInTheDocument();
    });

    it("loads initial data", async () => {
        const getPrismicClientMocked = mocked(getPrismicClient)

        getPrismicClientMocked.mockReturnValueOnce({
            query: jest.fn().mockResolvedValueOnce({
                results: [
                    {
                        uid: "my-new-post",
                        data: {
                            title: [
                                { type: "heading", text: "My new post" }
                            ],
                            content: [
                                { type: "paragraph", text: "Post exerpt" }
                            ],
                        },
                        last_publication_date: "04-01-2021",
                    }
                ]
            })
        } as any)

        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    posts: [{
                        slug: "my-new-post",
                        title: "My new post",
                        exerpt: "Post exerpt",
                        updatedAt: "01 de abril de 2021"
                    }]
                }
            })
        )
    })
})

