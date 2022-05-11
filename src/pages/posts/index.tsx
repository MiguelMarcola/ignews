import styles from "./styles.module.scss";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa saepe voluptatibus provident? Animi exercitationem officiis itaque mollitia ullam provident, quasi vel nulla corrupti. Id dolores qui ipsam officia sunt?</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa saepe voluptatibus provident? Animi exercitationem officiis itaque mollitia ullam provident, quasi vel nulla corrupti. Id dolores qui ipsam officia sunt?</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating bla bla</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa saepe voluptatibus provident? Animi exercitationem officiis itaque mollitia ullam provident, quasi vel nulla corrupti. Id dolores qui ipsam officia sunt?</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at("document.type", "post")
    ], {
        fetch: ["post.Title", "post.Content"],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}