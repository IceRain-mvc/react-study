import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import routes from "../router/routerConfig";
import RouterView from "../router/RouterView";
import "./list.css";

class List extends Component {
    render() {
        return (
            <div>

                <div className="list">
                    <div>

                        <NavLink to="/introduce">介绍</NavLink>
                    </div>
                    <div>

                        <NavLink to="/video">视频</NavLink>
                    </div>
                    <div>

                        <NavLink to="/audio">音频</NavLink>
                    </div>



                </div>
                <RouterView routes={routes}/>
            </div>
        );
    }
}

export default List;
