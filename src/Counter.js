import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment , incrementByAmount} from "../src/Redux/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          IncrementByAmount
        </button>
        <br/>
        <span>{count}</span>
      </div>
    </div>
  );
};
