import {useState} from 'react';

const App = () => {
  const [number, setNumber] = useState('');
  const [timer, setTimer] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const handleEnter = event =>{
    if(event.key === 'Enter'){
      let num = parseInt(number);
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setTimer(num <= 0 ? 0 : num);
        num -= 1;
      }, 1000);
      setIntervalId(newIntervalId);
    }
  }

  const handleOnChange = event =>{
    clearInterval(intervalId);
    setNumber(event.target.value);
  }

  return (
    <div className="app">
      <input 
        type="number" 
        onChange={handleOnChange} 
        onKeyDown={handleEnter}
        autoFocus 
        placeholder="Enter an integer number" 
        value={number} 
      />
      <h1>{timer}</h1>
    </div>
  )
}

export default App
