import { atom, selector } from "recoil";
import api from "../../api";
import { transform } from "./transformers";

const questionsState = atom({
  key: "questionsState",
  default: selector({
    key: "questionsState/Default",
    get: () => api.getQuestions(3).then(transform),
  }),
});

export default questionsState;
