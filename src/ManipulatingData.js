import React, {Component} from 'react';

class ManipulatingData extends Component {
    constructor()
    {
        super();
        this.state = { items: []}
    }

    
    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
        .then(response => response.json())
        .then(({results: items}) => this.setState ({items}))
    }
    filterList(e)
    {
        this.setState({ filter: e.target.value})
    }
    render() {
        let items = this.state.items;
        if(this.state.filter)
        {
            items = items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type="text" onChange={this.filterList.bind(this)}/>
                {items.map(item => <Person Key={item.name} person={item}/>)}
            </div>
        );
    }
}

const Person = (props) => <h4>{props.person.name}</h4>
export default ManipulatingData;