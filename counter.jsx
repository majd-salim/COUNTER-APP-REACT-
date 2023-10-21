import {useState} from 'react';


function Counter() {
    const [count, setCount] = useState(0)
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h1 className='title'>COUNTER APP</h1>
        <p className='count'>Count: {count}</p>

        <div className='BTN'> 
        <button className='up' onClick={increment}>Increment</button>
        <button className='down' onClick={decrement}>Decrement</button>
        </div>

      </div>
    );
  }
  
  export default Counter;