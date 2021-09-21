import { useRecoilValue } from "recoil";

import questionsState from "../../store/questions";
import finishedState from "../../store/questions/finished";
import Page from "../../uikit/Page";
import Question from "../Question";

import styles from "./styles.module.css";

const Questions = () => {
  const isFinished = useRecoilValue(finishedState);
  const questions = useRecoilValue(questionsState);

  if (isFinished) return null;

  return (
    <Page>
      <section className={styles.container}>
        {questions.map(({ id, title }) => (
          <Question key={id} questionId={id} title={title} />
        ))}
      </section>
    </Page>
  );
};

export default Questions;
