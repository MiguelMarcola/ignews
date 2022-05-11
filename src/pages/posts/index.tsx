import styles from "./styles.module.scss";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom"
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

type Posts = {
    slug: string;
    title: string;
    exerpt: string;
    updatedAt: string;
}

interface PostsProps {
    posts: Posts[];

}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <a href="#" key={post.slug}>
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.exerpt}</p>
                        </a>
                    )
                    )}
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.predicates.at("document.type", "post")
    ], {
        fetch: ["post.Title", "post.Content"],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.Title),
            exerpt: post.data.Content.replaceAll("\n", " ").split(" ").slice(0, 30).join(" ").concat("..."),
            updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    })
    return {
        props: { posts }
    }
}