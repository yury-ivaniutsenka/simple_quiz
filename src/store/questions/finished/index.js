import { selector } from "recoil";
import questionsState from "../index";

const finished = selector({
  key: "finishedState",
  get: ({ get }) =>
    !get(questionsState).some(
      ({ answers }) => !answers.some(({ selected }) => selected)
    ),
});

export default finished;
