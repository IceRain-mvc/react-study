import React from "react";

export default function loginHocComponent(Component,str) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <button onClick={()=>{
                        if (localStorage.getItem("token")) {
                            this.props.history.push("/detail",str);
                        } else {
                            this.props.history.push("/login",str);
                        }
                    }}>{str}</button>
                    <Component {...this.props}/>
                </div>
            );
        }

    }
}
