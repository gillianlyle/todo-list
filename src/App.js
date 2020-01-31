import React, {useState} from 'react';
import './App.css';

const App = () => {

    //declare new state variables
    const [value, setValue] = useState(''); // set to string
    const [toDos, setToDos] = useState([]); // set to array

    const handleChange = event => {setValue(event.target.value)} 
    const handleSubmit = event => {setToDos([...toDos, value])} 
    const handleDelete = index => { 
      let newToDos = [...toDos]; // create copy of toDos array
      newToDos.splice(index, 1) // remove item from array
      setToDos(newToDos) // set array to updated list
    }

    return (
      <div className="container">
        <h1>To do list </h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={value} onChange={handleChange} />
          <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Add</button>
          </div>
        </div>
        <hr />
        <ul>
          {toDos.map((toDo, index) => (
              <li key={index}>{toDo} <button onClick={() => handleDelete(index)}>Delete</button></li>
            )
          )
          }
        </ul>
 
      </div>
  );
}

export default App;