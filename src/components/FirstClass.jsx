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

    // initiated after mounting of components is completed
    componentDidMount() {
        setTimeout(preValue => {
            this.setState({
                count: 2
            })
        }, 4000);
    }

    // initiated when any changes occur in DOM
    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(preValue => {
            this.setState({
                count: 4
            })
        }, 4000);
    }

    // Called before a component is destroyed
    // Used for cleanup to prevent memory leaks
    componentWillUnmount() {


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
