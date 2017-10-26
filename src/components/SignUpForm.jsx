import React from 'react';
import './SignUpForm.scss';

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    

    render(){
        return (
            <form action="submit" className="sign-up-form">
                <div className="formgroup">
                    <label className="control-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange}
                    type="text" name="email" className="form-control"/>
                </div>
                <div className="formgroup">
                    <label className="control-label">Password</label>
                    <input value={this.state.password} onChange={this.onChange} type="password" name="password" className="form-control"/>
                </div>
                <div className="formgroup">
                    <button className="register-btn btn btn-primary" onClick={this.onSubmit}>Register with email</button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;