import "./Counter.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const CounterDisplay = ({ value }) => {
    return (
        <div className="counter-display">
            <h2>Значення лічильника: {value}</h2>
        </div>
    );
};

CounterDisplay.propTypes = {
    value: PropTypes.number.isRequired
};

const StepButton = ({ step, onStepClick }) => {
    const stepText = step > 0 ? `+${step}` : `${step}`;
    return (
        <button 
            className={`step-button ${step > 0 ? 'positive' : 'negative'}`}
            onClick={() => onStepClick(step)}
        >
            {stepText}
        </button>
    );
};

StepButton.propTypes = {
    step: PropTypes.number.isRequired,
    onStepClick: PropTypes.func.isRequired
};

function Counter() {
    console.log("Counter render");

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prev) => prev + 1);
    }

    function handleStepChange(step) {
        setCount((prev) => prev + step);
    }

    return (
        <div className="counter-container">
            <h1>Лічильник</h1>
            
            <CounterDisplay value={count} />
            
            <div className="buttons-container">
                <button 
                    onClick={handleIncrement} 
                    className="counter-btn increment-btn"
                >
                    +1
                </button>

                <div className="step-buttons-group">
                    <h3>Зміна на задану величину:</h3>
                    <div className="step-buttons">
                        <StepButton step={10} onStepClick={handleStepChange} />
                        <StepButton step={-100} onStepClick={handleStepChange} />
                        <StepButton step={25} onStepClick={handleStepChange} />
                        <StepButton step={-5} onStepClick={handleStepChange} />
                        <StepButton step={50} onStepClick={handleStepChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;