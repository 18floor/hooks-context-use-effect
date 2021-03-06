import React, {useState} from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [info, setInfo] = useState(null);

    const handleClick = (info) => {
        setInfo(info);
    };

    return (
        <div className="app-container">
            <List onClick={handleClick}/>
            {info && <Details info={info}/>}
        </div>
    );
}

export default App;