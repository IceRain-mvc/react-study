import React, {Component, Fragment} from 'react';
import Btn from "./Btn";

class Plan extends Component {
    render() {
        return (
            <Fragment>
                {/*
                遍历: 传过来的数据
                */}

                {this.props.bank.map((item, index) => {
                    return <Fragment key={item.id}>
                        {index % 3 === 0 ? <br/> : ""}
                        <Btn {...item} onShow={this.props.onShow}/>
                    </Fragment>
                })}
            </Fragment>
        );
    }
}

export default Plan;
