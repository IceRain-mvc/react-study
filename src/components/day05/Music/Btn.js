import React, {Component} from 'react';
import "./Btn.css";

class Btn extends Component {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
        this.state = {
            flag: false,
            clickStyle:{
                backgroundColor: "greenyellow",
                boxShadow:"10px 10px  15px #cccccc"
            },
            normalStyle:{
                boxShadow:"10px 10px  15px greenyellow"
            }
        }
    }
    /*
    * document
    * */
    componentDidMount() {
        //三要素
        document.addEventListener("keydown",(e)=>{
            //判断
            if (e.keyCode === this.props.keyCode) {
                let oBtn = this.btnRef.current;
                oBtn.currentTime = 0;
                oBtn.play();
                this.setFlag();
                this.props.onShow(this.props.id);
            }
        })
    }

    setFlag(){
        this.setState({
            flag: true
        });

        setTimeout(() => {
            this.setState({
                flag: false
            });
        }, 100);
    }


    render() {
        let {flag, normalStyle, clickStyle} = this.state;
        return (
            <div className="btn" style={flag ? clickStyle : normalStyle} onClick={() => {
                let oBtn = this.btnRef.current;
                oBtn.currentTime = 0;
                oBtn.play();
                this.setFlag();
                this.props.onShow(this.props.id);
            }}>
                {this.props.keyTrigger}
                <audio ref={this.btnRef} src={this.props.url}/>
            </div>
        );
    }
}

export default Btn;
