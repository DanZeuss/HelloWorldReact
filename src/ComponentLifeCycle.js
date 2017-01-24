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
            <button onClick={this.update}>{this.state.val}</button>
        );
    }

    componentWillMount()
    {
        console.log('componentWillMount');
    }
    componentDidMount()
    {
        console.log('ComponentDidMount');
    }

    componentWillUnmount()
    {
        console.log('componentWillUnmount');
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