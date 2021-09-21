import { useRecoilValue } from "recoil";

import finishedState from "../../store/questions/finished";
import resultState from "../../store/questions/result";
import Page from "../../uikit/Page";

import styles from "./styles.module.css";

const Result = () => {
  const isFinished = useRecoilValue(finishedState);
  const { correct, all } = useRecoilValue(resultState);

  if (!isFinished) return null;

  return (
    <Page>
      <section className={styles.container}>
        <span className={styles.text}>
          {correct} / {all}
        </span>
      </section>
    </Page>
  );
};

export default Result;
