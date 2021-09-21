import { memo, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import answerState from "../../store/answer";
import disabledState from "../../store/answers/disabled";
import Button from "../../uikit/Button";

const Answer = ({ questionId, answerId }) => {
  const disabled = useRecoilValue(disabledState(questionId));
  const [answer, setAnswer] = useRecoilState(
    answerState({ questionId, answerId })
  );
  const { title, selected, correct } = answer;
  const variant = selected
    ? correct
      ? "success"
      : "danger"
    : disabled && correct
    ? "success"
    : "secondary";

  const onClick = useCallback(
    () => setAnswer({ ...answer, selected: true }),
    [answer, setAnswer]
  );

  return (
    <Button
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default memo(Answer);
