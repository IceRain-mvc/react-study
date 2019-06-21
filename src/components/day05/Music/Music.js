import React, {Component} from 'react';
import Plan from "./Plan";
// import PropTypes from 'prop-types';

class Music extends Component {
    state = {
        msg: "",
        bankOne: [
            {
                keyCode: 81,
                keyTrigger: 'Q',
                id: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            }, {
                keyCode: 87,
                keyTrigger: 'W',
                id: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            }, {
                keyCode: 69,
                keyTrigger: 'E',
                id: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            }, {
                keyCode: 65,
                keyTrigger: 'A',
                id: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            }, {
                keyCode: 83,
                keyTrigger: 'S',
                id: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            }, {
                keyCode: 68,
                keyTrigger: 'D',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            }, {
                keyCode: 90,
                keyTrigger: 'Z',
                id: "Kick-n'-Hat",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            }, {
                keyCode: 88,
                keyTrigger: 'X',
                id: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            }, {
                keyCode: 67,
                keyTrigger: 'C',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            },
        ]
    };

    constructor(props) {
        super(props);
        //1:不传参  2:统一管理
        this.onShow = this.onShow.bind(this);
    }


    // 箭头函数  实验性写法
    onShow(msg) {
        this.setState({
            msg
        })
    }

    render() {
        return (
            <div>
                {/*
                    1:箭头函数
                    2:构造 不传参
                */}
                <Plan bank={this.state.bankOne} onShow={this.onShow}/>
                <div>
                    <h1>{this.state.msg}</h1>
                </div>
                <input type="range"/>
            </div>
        );
    }
}



export default Music;
