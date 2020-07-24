import React, {useState} from 'react';

import './App.css';
import Counter from "./Counter";


function App() {
    const [amount, setAmount] = useState(3);
    const addCounter = () => {
        setAmount(amount + 1)
    }
    const deleteCounter = () => {
        if (amount <= 1) {
            return amount;
        } else {
            setAmount(amount - 1)
        }
    }
    return (
        <div className="App">
            <h2>Counter</h2>
            {Array.apply(0, Array(amount)).map(() => {
                return <Counter/>
            })}
            <button className="btn btn-light" onClick={addCounter}>Add</button>
            <button className="btn btn-light" onClick={deleteCounter}>Delete</button>
        </div>
    );
}

export default App;
