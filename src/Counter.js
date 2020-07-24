import React, {useState} from 'react';

import './App.css';

function Counter() {
    const arr = [1,2,3];
    const [count, setCount] = useState(0);
    const updateCounter = (n) => {
        setCount(count + n);
    }
    return (
        <div className="App">
            {arr.map(() => {})}
            {count}
            <button className="btn btn-light" onClick={()=>updateCounter(-1)}>-1</button>
            <button className="btn btn-light" onClick={()=>updateCounter(-2)}>-2</button>
            <button className="btn btn-light" onClick={()=>updateCounter(-3)}>-3</button>
        </div>
    );
}

export default Counter;