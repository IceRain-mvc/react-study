import React, {Component} from 'react';
import "./Plane.css"
import Button from "./Button";
/*
* big.js
* 1:下载依赖
* 2:3个文件
* 3: next  total operation
*
* */

class Plane extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums : [
                {
                    value:"1",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"2",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"3",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"x",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"4",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"5",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"6",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"÷",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"7",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"8",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"9",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },{
                    value:"=",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },
                {
                    value:"0",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },
                {
                    value:".",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },
                {
                    value:"+",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },
                {
                    value:"-",
                    styleClick:{

                    },

                    normalClick:{

                    },

                },
            ]
        }
    }


    render() {
        return (
            <div className="plane">
                {this.state.nums.map((item,index)=>{
                    return <Button {...item} key={index} clickItem={this.props.clickItem}/>
                })}
            </div>
        );
    }
}

export default Plane;
