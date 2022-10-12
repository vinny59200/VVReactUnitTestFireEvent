import { useState } from "react";
import './App.css';

function App() {

  const [number, setNumber] = useState("");

	const handleInput = (e) => {
		if (e.target.name === "number" && e.target.value) {
			e.target.value = e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
		}
		setNumber(e.target.value );
	}

  return (
    <div className="App">
      <header className="App-header">
      <label className='labelnumber'>
				Card Number: 
				<input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleInput} name="number" className='card-input' minLength={19}  data-testid="hpi-number"/>
			</label>
      </header>
    </div>
  );
}

export default App;
