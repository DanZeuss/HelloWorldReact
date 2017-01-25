import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class ControlComponentUpdates extends Component {

    constructor()
    {
        super();
        this.state = { increasing: false }
    }
    update()
    {
        ReactDOM.render(<ControlComponentUpdates val={this.props.val +1}/>,
                        document.getElementById('root'))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val});            
    }
    
    
    /**
     * We can define when the component will be updated
     * 
     * @param {any} nextProps
     * @param {any} nextState
     * @returns
     * 
     * @memberOf ControlComponentUpdates
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps.val}. The actual value is ${this.props.val}`)
    }
    
    render() {
        console.log(this.state.increasing);  
        return (
            <div>
                <button onClick={ this.update.bind(this)}> {this.props.val}</button>
            </div>
        );
    }
}

ControlComponentUpdates.defaultProps = { val : 0 }
export default ControlComponentUpdates;