import React, {Component} from 'react';

const FirstPractice = (props) => {
    return (
        <div>
            <div className="details">
                <img src={props.contact.imgUrl} className="img-size"/>
                <h3>{props.contact.name}</h3>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
        </div>
    );
};

export default FirstPractice;
