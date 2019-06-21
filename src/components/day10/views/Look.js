import React, {Component} from 'react';
import RouterView from "../router/RouterView";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";
import axios from "axios";


class Look extends Component {

    componentDidMount() {
        // jsonp("http://www.edu-edu.com/sale/public/products/search/content/byKeyword/0/20/json?keyword=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84&noproductSystem=b2b",{},(res)=>{
        //     console.log(res);
        // })

        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then((res)=>{
            this.setState({
                data: res.data.list
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h1>宝宝看</h1>
                <NavLink to="/look/song">儿歌</NavLink>
                <NavLink to="/look/story">故事</NavLink>
                <NavLink to="/look/cartoon">动画片</NavLink>
                <RouterView routes={this.props.children}/>

                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Look;
