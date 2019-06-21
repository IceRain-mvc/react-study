import React, {Component} from 'react';

class Day05 extends Component {
    constructor(props) {
        super(props);
        this.oAudio = React.createRef();
    }


    shouldComponentUpdate(){
        console.log("should");
        return true;
    }
    render() {
        console.log("render");
        return (
            <div onClick={()=>{
                this.forceUpdate();
            }}>
            aaaa

                <audio ref={this.oAudio} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
                <button onClick={()=>{
                    console.log(this.oAudio.current);

                    let oAudio = this.oAudio.current;
                    oAudio.play();

                }}>播放</button>
            </div>
        );
    }
}

export default Day05;
