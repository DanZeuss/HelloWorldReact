import React from 'react';

class CustomValidation extends React.Component{
    render()
    {
        return <Title text="1234578"/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, Component){
        if (!(propName in props))
            return new Error(`Missing ${propName}`)
        if (props[propName].length < 6)
            return new Error(`${propName} was too short`)
    }
}

export default CustomValidation