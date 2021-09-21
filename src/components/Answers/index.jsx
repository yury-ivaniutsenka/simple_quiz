import { memo } from "react";
import { useRecoilValue } from "recoil";

import answersState from "../../store/answers";
import Answer from "../Answer";

import styles from "./styles.module.css";

const Answers = ({ questionId }) => {
  const answers = useRecoilValue(answersState(questionId));

  return (
    <div className={styles.container}>
      {answers.map(({ id }) => (
        <Answer key={id} questionId={questionId} answerId={id} />
      ))}
    </div>
  );
};

export default memo(Answers);
