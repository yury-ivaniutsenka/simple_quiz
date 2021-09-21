import { selectorFamily } from "recoil";
import questionsState from "../questions";

const answers = selectorFamily({
  key: "answersState",
  get:
    (questionId) =>
    ({ get }) =>
      get(questionsState).find(({ id }) => id === questionId).answers,
});

export default answers;
