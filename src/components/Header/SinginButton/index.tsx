import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import styles from "./styles.module.scss";

export function SinginButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className={styles.singinButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <MdClose color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className={styles.singinButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
