import "./Counter.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;