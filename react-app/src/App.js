import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from "./components/PriceList";

const items = [
    {
        "id": 1,
        "title": "去深圳旅游",
        "price": 200,
        "date": "2023-12-16",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome"
        }
    },
    {
        "id": 2,
        "title": "去宁波旅游",
        "price": 200,
        "date": "2023-12-16",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome"
        }
    }
]

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {/*<a*/}
                {/*  className="App-link"*/}
                {/*  href="https://reactjs.org"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  Learn React*/}
                {/*</a>*/}
            </header>

            <PriceList
                items={items}
            />
        </div>
    );
}

export default App;
