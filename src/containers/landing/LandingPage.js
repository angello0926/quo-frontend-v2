import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className = "jumbotron">
                <h1> Quo </h1>
                <Link to="/explore" className="btn btn-primary btn-lg"> Learn More </Link>
            </div>
        );
    }
}

export default LandingPage;