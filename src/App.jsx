import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import Result from "./components/Result";
import Questions from "./components/Questions";

const App = () => (
  <RecoilRoot>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Result />
        <Questions />
      </Suspense>
    </ErrorBoundary>
  </RecoilRoot>
);

export default App;
