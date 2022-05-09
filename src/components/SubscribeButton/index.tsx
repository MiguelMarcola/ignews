import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
    const { data: session } = useSession();

    function handleSubscribe() {
        if (!session) {
            signIn("github")
            return;
        }
    }

    return (
        <button
            onClick={handleSubscribe}
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}
