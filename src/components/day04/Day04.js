import React, {Component} from 'react';
import List from "./List";
import axios from "axios";
import "./Day04.css";

class Day04 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            flag: false,
            timer: null
        }
    }
    //网络请求
    componentDidMount() {
        this.requestData();
    }

    requestData() {
        axios.get("http://localhost:3000/api").then((res) => {
            console.log(res.data);
            this.setState({

                list: res.data
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    //1:loading
                    this.setState({
                        flag: true
                    });

                    // this.state.timer = setTimeout(()=>{
                    //
                    // })

                    this.setState({
                        timer:setTimeout(()=>{
                            this.requestData();
                            this.setState({
                                flag: false
                            })
                        },1000)
                    })

                    //2:请求


                }}>刷新</button>
                <List list={this.state.list}/>
                {this.state.flag&&<div className="loading"><img src="http://localhost:3002/loading.gif" alt=""/></div>}
            </div>
        );
    }

    componentWillUnmount(){
        //同步
        // if (this.state.timer) {
        //     this.setState({
        //         timer: null
        //     })
        // }
        //异步
        this.setState((state,props)=>{
            clearTimeout(state.timer);
        })
    }
}

export default Day04;
