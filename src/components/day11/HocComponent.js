import React from "react";

/*
*   Component :不改变
* */
function HocComponent(Component, color) {
    return class Hoc extends React.Component {
        constructor(props) {
            super(props);
            console.log("高阶组件", props);
            this.state = {
                style: {
                    backgroundColor: color || "blue"
                }
            }
        }

        render() {
            let age = 20;
            return (
                <div style={this.state.style}>
                    <Component {...this.props} age={age}/>
                </div>
            );
        }

    }
}

export default HocComponent;
