// Recoil again
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
function App() {
  return (
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCounter></CurrentCounter>
      <Increase></Increase>
      <Decrease></Decrease>
    </div>
  );
}

function CurrentCounter() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}
function Increase() {
  const setCounter = useSetRecoilState(counterAtom);
  function increase() {
    setCounter((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
function Decrease() {
  const setCounter = useSetRecoilState(counterAtom);
  function decrease() {
    setCounter((c) => c - 1);
  }
  return (
    <div>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
