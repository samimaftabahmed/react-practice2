import React from 'react';
import './App.css';
import './FirstPractice.css'
import FirstPractice from "./components/FirstPractice";

export default function App() {

    return (
        <div>
            <FirstPractice contact={{
                name: "Machine Learning",
                imgUrl: require("./images/img-1.jpg"),
                phone: "011-6512131",
                email: "sajhsfd@gjhbd.com"
            }}/>
            <FirstPractice contact={{
                name: "Big Data",
                imgUrl:  require("./images/img-2.jpg"),
                phone: "022-54120",
                email: "dgdfg@bnbn.com"
            }}/>
            <FirstPractice contact={{
                name: "Blockchain",
                imgUrl: require("./images/img-3.jpg"),
                phone: "033-8732233",
                email: "iopiop@asas.com"
            }}/>
        </div>

    );
}

