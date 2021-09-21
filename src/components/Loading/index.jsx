import classNames from "classnames";

import Page from "../../uikit/Page";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <Page>
      <section className={styles.questions}>
        {[1, 2, 3, 4].map((questionId) => (
          <article key={questionId} className={styles.question}>
            <div className={classNames(styles.title, styles.animation)} />
            <div className={styles.answers}>
              {[1, 2, 3, 4].map((answerId) => (
                <div
                  key={questionId + "_" + answerId}
                  className={classNames(styles.button, styles.animation)}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </Page>
  );
};

export default Loading;
