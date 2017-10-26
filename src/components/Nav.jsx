import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    if(props.user==null){
        console.log(props.user);
        return (
        <div className="nav">
            <div className="content">
            <img src={require('../logo.png')}/>
            <ul className="pull-right">   
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/explore">EXPLORE</Link></li>
                <li><Link to="/login">LOG IN</Link></li>
                <li className="btn btn-primary"><Link to="/register">REGISTER</Link></li>
            </ul>
            </div>
        </div>
        );
    }else{
        return (
            <div className="nav">
                <div className="content">
                    <img src={require('../logo.png')}/>
                    <ul>   
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/explore">EXPLORE</Link></li>
                        <li><img src="/user.png" />{props.user.name}</li>
                    </ul>
                </div>
            </div>
            );
    }

};

export default Nav;