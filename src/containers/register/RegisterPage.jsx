import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { registerAccount } from '../../actions/userActions';
import './RegisterPage.scss';
import SignUpForm from '../../components/SignUpForm.jsx';
class RegisterPage extends React.Component{
    
    render(dispatch){
        const { registerAccount } = this.props;
        return (
            <div className = "jumbotron">
                <h1> Be a member in Quo community </h1>
                <p className="small-title">Sign up Quo to create your favourite quotes picture and share them to the world</p>
                <SignUpForm  userSignUpRequest =  {registerAccount} />
            </div>
        );
    }
}

RegisterPage.propTypes = {
    registerAccount: PropTypes.func.isRequired
};



export default connect((state) => { return {};}, { registerAccount })(RegisterPage);