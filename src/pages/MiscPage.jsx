import styles from "./MiscPage.module.css";
import { InterestingFinds } from "../components/InterestingFinds/InterestingFinds";
import { Movies } from "../components/Movies/Movies";

export const MiscPage = () => {
  return (
    <div className={styles.container}>
      <InterestingFinds />
      <Movies />

      {/* Future sections: Hobbies, Books, etc. */}
    </div>
  );
};
