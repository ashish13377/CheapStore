import React from 'react';
import { Link } from 'react-router-dom'
import DarkMode from "../components/header/DarkMode"

const Notfound = () => {
    return <div>



        <DarkMode />
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link to="/"
                    className="sc-button style letter style-2 style-item-details" style={{ margin: "10px" }}><span>Go To Home Page</span>
                </Link>
            </div>
        </div>


    </div>;
};

export default Notfound;
