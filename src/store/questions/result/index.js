import { selector } from "recoil";
import questionsState from "../index";

const result = selector({
  key: "resultState",
  get: ({ get }) => {
    const questions = get(questionsState);
    const correct = questions.reduce((acc, { answers }) => {
      if (answers.some(({ selected, correct }) => selected && correct))
        return ++acc;

      return acc;
    }, 0);

    return {
      correct,
      all: questions.length,
    };
  },
});

export default result;
