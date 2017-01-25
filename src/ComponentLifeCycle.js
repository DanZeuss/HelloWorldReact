import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends Component {
    constructor()
    {
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this)
    }
    update()
    {
        this.setState({ val: this.state.val + 1})
    }
    render() {
        console.log('render')
    return (
            <button onClick={this.update}>{this.state.val * this.state.m}</button>
        );
    }

    componentWillMount()
    {
        console.log('componentWillMount');
        this.setState({ m: 2})
    }

    componentDidMount()
    {
        console.log('ComponentDidMount');
        this.inc = setInterval(this.update, 1000);
    }

    componentWillUnmount()
    {
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }
}

class Wrapper extends Component {
    mount()
    {
        ReactDOM.render(<ComponentLifeCycle/>, document.getElementById('a'))
    }
    unmount()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>    
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;