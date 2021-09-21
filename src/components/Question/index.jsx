import { memo } from "react";

import Title from "../../uikit/Title";
import Answers from "../Answers";

import styles from "./styles.module.css";

const Question = ({ questionId, title }) => (
  <article className={styles.container}>
    <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
    <Answers questionId={questionId} />
  </article>
);

export default memo(Question);
