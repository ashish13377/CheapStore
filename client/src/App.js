
import './App.css';
import { Routes, Route } from 'react-router-dom'
import routes from './pages/router'


export const chatServer = "http://localhost:5000/";
export const serverAPI = "http://localhost:5000/api";

function App() {


    return (
        <Routes >
            {
                routes.map((data, index) => (
                    <Route exact={true} path={data.path} element={data.component} key={index} />
                ))
            }
        </Routes>
    );
}

export default App;
