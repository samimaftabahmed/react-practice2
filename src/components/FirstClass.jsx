import React, {Component} from 'react';

class FirstClass extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.countNumber = this.countNumber.bind(this);
    }

    countNumber() {
        this.setState((preValue) => {
            return {count: preValue.count + 1}
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countNumber}>Count</button>
            </div>
        );
    }
}

export default FirstClass;
