import React, {Component} from 'react';
import PropTypes  from "prop-types";

/*
* list要接收的是数组
* */
class Child extends Component {
    render() {
        let {
            num,
            str,
            list,
            obj,
            sex
        } = this.props;
        return (
            <div>
                <h2>{num}</h2>
                <h2>{str}</h2>
                {list.map((item,index)=><h2 key={index}>{item}</h2>)}
                <h2>{obj.password}</h2>
                <div>{this.props.oDiv}</div>
                <h2>{sex}</h2>
            </div>
        );
    }
}

export default Child;

/*
* 类型验证
* */
Child.propTypes = {
    num: PropTypes.number,
    str: PropTypes.string,
    list: PropTypes.array,
    obj: PropTypes.object,
    oDiv: PropTypes.element,
    sex: PropTypes.oneOf(["man", "women"])

};





