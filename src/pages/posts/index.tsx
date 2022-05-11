import styles from "./styles.module.scss";
import Head from "next/head";

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