export const transform = (data) =>
  data.results.map(({ question, incorrect_answers, correct_answer }) => ({
    id: getId(),
    title: question,
    answers: incorrect_answers
      .map((title) => ({ id: getId(), title, correct: false, selected: false }))
      .concat({
        id: getId(),
        title: correct_answer,
        correct: true,
        selected: false,
      })
      .sort(() => 0.5 - Math.random()),
  }));

//Base stub for generate ids
let currentId = 0;
const getId = () => ++currentId;
