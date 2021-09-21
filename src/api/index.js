//Base stub for api
const baseUrl = "https://opentdb.com/api.php";

const api = {
  getQuestions: (amount) =>
    fetch(`${baseUrl}?amount=${amount}`).then((res) => res.json()),
};

export default api;
