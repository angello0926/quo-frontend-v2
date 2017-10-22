import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    if(props.user==null){
        console.log(props.user);
        return (
        <div className="nav">
                <ul>
                    <li className="logo"><img src={require('../logo.png')}/></li>
                    <li><Link to="/">ABOUT</Link></li>
                    <li><Link to="/explore">EXPLORE</Link></li>
                    <li><Link to="/login">LOG IN</Link></li>
                    <li className="btn-primary"><Link to="/register">REGISTER</Link></li>
                </ul>
            </div>
        );
    }else{
        return (
            <div>
                    <ul>
                        <li className="logo"><img src={require('../logo.png')} /></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/explore">EXPLORE</Link></li>
                        <li><img src="/user.png" />{props.user.name}</li>
                    </ul>
                </div>
            );
    }

};

export default Nav;