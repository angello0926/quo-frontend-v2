import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { registerAccount } from '../../actions/userActions';
import './RegisterPage.scss';
import SignUpForm from '../../components/SignUpForm.jsx';
class RegisterPage extends React.Component{
    
    render(dispatch){
        return (
            <div className = "jumbotron">
                <h1> Be a member in Quo community </h1>
                <p className="small-title">Sign up Quo to create your favourite quotes picture and share them to the world</p>
                <SignUpForm />
            </div>
        );
    }
}


// const mapStateToProps = (state) =>{
//     console.log(state);
//     return{
//         user: state
//     };
// };


// const mapDispatchToProps = (dispatch) =>{
//     return {
//         setName: (user) =>{
//             dispatch({
//                 type: "REGISTER"
//             })
//         }
//     }
// }

// RegisterPage = connect()(RegisterPage)

export default RegisterPage;