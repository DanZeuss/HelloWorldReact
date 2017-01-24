import React from 'react';


class App extends React.Component{
  render()
  {
    return (
      <div>
        <h1>Hello Dan</h1>
        <h2>the props of the application is: {this.props.txt}</h2>
      </div>
    )
  }
}

// we can define all prop of our component
App.propTypes = {
  txt: React.PropTypes.string,
  // if we define "isRequerid", it throws an error on console telling us that we need to fill the prop
  cat: React.PropTypes.number
}

// we also can define all defauls of our component
App.defaultProps = {
  // to override, we need to remove the "txt" prop from our App (inside the index.js)
  txt: "Daniel é um cara legal"
}

export default App