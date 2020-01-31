import React, {useState} from 'react';
import './App.css';

const App = () => {

    //declare new state variables
    const [value, setValue] = useState('');
    const [toDos, setToDos] = useState([]); // keep track of to-do list

    const handleChange = event => {setValue(event.target.value)}
    const handleSubmit = event => {setToDos([...toDos, value])} // create array and add new value
    console.log("toDos value: ", toDos)

    return (

      <div className="container">

        <h1> To do list </h1>

        <div className="input-group mb-3">
          <input type="text" className="form-control" value={value} onChange={handleChange} />
          <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Add</button>
          </div>
        </div>

        <hr />

      </div>
  );
}

export default App;