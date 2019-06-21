import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Dialog.css";

class Dialog extends Component {
    render() {
    let {flag,header,content} = this.props;
        return (
            <div className="dialog">
                {flag === 1 && <div className="dialog-content">
                    <header className="header"><h3>{header}</h3></header>
                    <hr/>
                    <main>{content}</main>
                    <hr/>
                    <footer>
                        <button onClick={()=>{
                            this.props.cancel();
                        }}>取消</button>
                        <button onClick={()=>{
                            this.props.yes();
                        }}>确定</button>
                    </footer>
                </div>}
                {flag === 2 && <div className="dialog-content">
                    <header className="header"><h3>{header}</h3></header>
                    <hr/>
                    <main>{content}</main>
                    <hr/>
                    <footer>
                        <button onClick={()=>{
                            this.props.cancel();
                        }}>取消</button>
                        <button onClick={()=>{
                            this.props.yes();
                        }}>确定</button>
                    </footer>
                </div>}
                {flag === 3 && <div className="dialog-content">
                    <header className="header"><h3>{header}</h3></header>
                    <hr/>
                    <main>{content}</main>
                    <hr/>
                    <footer>
                        <button onClick={()=>{
                            this.props.cancel();
                        }}>取消</button>
                        <button onClick={()=>{
                            this.props.yes();
                        }}>确定</button>
                    </footer>
                </div>}
            </div>
        );
    }
}

Dialog.propTypes = {
    flag: PropTypes.oneOf([1, 2, 3])
};

export default Dialog;
