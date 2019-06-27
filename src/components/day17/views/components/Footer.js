import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div style={{position: "fixed", bottom: 0, left: 0, right: 0,backgroundColor:"#ffb642",display:"flex",alignItems:"center",justifyContent:"space-around",height:"50px",fontSize:"24px"}}>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/zixuan">自选</NavLink>
            </div>
        );
    }
}

export default Footer;
