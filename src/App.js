import React from 'react';
import './App.css';
import './FirstPractice.css'
import FirstPractice from "./components/FirstPractice";
import FirstClass from "./components/FirstClass";
import {Link} from "react-router-dom";

export default function App() {

    const data = [
        {
            name: "Machine Learning",
            imgUrl: require("./images/img-1.jpg"),
            phone: "011-6512131",
            email: "sajhsfd@gjhbd.com"
        },
        {
            name: "Big Data",
            imgUrl: require("./images/img-2.jpg"),
            phone: "022-54120",
            email: "dgdfg@bnbn.com"
        },
        {
            name: "Blockchain",
            imgUrl: require("./images/img-3.jpg"),
            phone: "033-8732233",
            email: "iopiop@asas.com"
        }
    ];

    return (
        <div>

            <h1>Home</h1>
            <h2>
                <Link to="/contact">Go to Contact</Link>
            </h2>
            <h2>
                <Link to="/users">Go to Users</Link>
            </h2>

            {
                data.map(item => <FirstPractice contact={item} key={item.name}/>)
            }

            <br/>

            <FirstClass/>
        </div>

    );
}

