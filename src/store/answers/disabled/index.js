import { selectorFamily } from "recoil";
import answersState from "../index";

const disabled = selectorFamily({
  key: "disabledState",
  get:
    (questionId) =>
    ({ get }) =>
      get(answersState(questionId)).some(({ selected }) => selected),
});

export default disabled;
