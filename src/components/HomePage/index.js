import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Index = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>This is Default Page</div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            + Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            - Decrement
          </button>
        </div>
      </div>
    </>
  );
};
export default Index;
