import React from "react";

function connect(color) {
    return function (component) {
        return class extends React.Component {
            render() {
                let Con = component;
                return (
                    <div>
                        <Con />
                    </div>
                );
            }

            constructor(props) {
                super(props);

            }

        }
    }
}

export default connect;
