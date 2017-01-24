import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class GetComponentReference extends Component {
    constructor()
    {
        super();
        this.state = {
            a: '',
            b: '',
            c: '',
            d: ''
        }
    }

    update()
    {
        this.setState(
            {   a: this.a.value,
                b: this.refs.b.value,
                c: ReactDOM.findDOMNode(this.c).value,
                d: this.d.refs.input.value
            }
        )
    }
    render() {
        return (
            <div>
                {/* look the difference between ref a and ref b. 
                    returning the component or the node that we're referencing    
                */}
                <input
                    ref={ node => this.a = node} 
                    type="text" 
                    onChange={this.update.bind(this)}
                />{this.state.a}
                <hr/>
                <input 
                    ref="b"
                    type="text" 
                    onChange={this.update.bind(this)}
                />{this.state.b}
                <hr/>    
                <Input
                    ref={ component => this.c = component}
                    update= {this.update.bind(this)}
                /> {this.state.c}  
                <hr/>    
                <InputInsideDiv
                    ref={ component => this.d = component}
                    update= {this.update.bind(this)}
                /> {this.state.d}  

            </div>
        );
    }
}

class Input extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.props.update} />
        );
    }
}

class InputInsideDiv extends Component {
    render() {
        return (
            <div>
                <input ref="input" type="text" onChange={this.props.update} />
            </div>
        );
    }
}


export default GetComponentReference;