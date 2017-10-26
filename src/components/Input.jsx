import React from 'react';
import _ from 'underscore';
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            
        })
    }
}

export default Input;