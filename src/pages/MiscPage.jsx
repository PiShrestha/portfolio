import styles from "./MiscPage.module.css";
import { InterestingFinds } from "../components/InterestingFinds/InterestingFinds";
import { Movies } from "../components/Movies/Movies";

export const MiscPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Miscellaneous</h1>
                <p className={styles.subtitle}>
                    Ideas, interests, and things that inspire me.
                </p>
            </header>

            <InterestingFinds />
            <Movies />

            {/* Future sections: Hobbies, Books, etc. */}
        </div>
    );
};
