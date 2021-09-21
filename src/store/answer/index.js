import { selectorFamily } from "recoil";
import questionsState from "../questions";

const answer = selectorFamily({
  key: "answerState",
  get:
    ({ questionId, answerId }) =>
    ({ get }) =>
      get(questionsState)
        .find(({ id }) => id === questionId)
        .answers.find(({ id }) => id === answerId),
  set:
    ({ questionId, answerId }) =>
    ({ set }, newValue) =>
      set(questionsState, (prevState) => {
        const questionIndex = prevState.findIndex(
          ({ id }) => id === questionId
        );
        const answerIndex = prevState[questionIndex].answers.findIndex(
          ({ id }) => id === answerId
        );
        const newAnswers = [
          ...prevState[questionIndex].answers.slice(0, answerIndex),
          newValue,
          ...prevState[questionIndex].answers.slice(answerIndex + 1),
        ];
        const newQuestion = {
          ...prevState[questionIndex],
          answers: newAnswers,
        };
        const newQuestions = [
          ...prevState.slice(0, questionIndex),
          newQuestion,
          ...prevState.slice(questionIndex + 1),
        ];
        return newQuestions;
      }),
});

export default answer;
