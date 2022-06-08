import styles from "./styles.module.scss";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom"
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Link from "next/link";

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
                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                            <a key={post.slug}>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.exerpt}</p>
                            </a>
                        </Link>
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
        fetch: ["post.title", "post.content"],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            exerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? "",
            updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    })
    return {
        props: {
            posts
        }
    }
}