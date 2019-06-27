import React, {Component} from 'react';
import Footer from "./components/Footer";
import {Button, Icon} from "antd";
import connect from "react-redux/es/connect/connect";

class ZiXuan extends Component {
    render() {

        let newArr = this.props.allData.filter((item) => {
            return item.isAdd;
        });

        return (
            <div>
                <Button icon="form" onClick={()=>{
                    this.props.history.push("/edit")
                }}>编辑</Button>


                {newArr.length ? (
                    <ul>
                        {
                            newArr.map((item,index)=>{
                                return <li key={item.id}>
                                    {item.name}
                                </li>
                            })
                        }
                    </ul>
                ) : (<div style={{textAlign: "center"}}>
                    <Icon onClick={() => {
                        this.props.history.push("/add");
                    }} type="plus-square" style={{color: "red", fontSize: "100px"}}/>
                </div>)}
                <Footer/>

            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        allData: state.reducerAll
    }
};

export default connect(initMapStateToProps)(ZiXuan);

// export default ZiXuan;
