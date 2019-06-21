import React, {Component} from 'react';
import HocComponent from "./HocComponent";
import connect from "./connect";

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                你好
            </div>
        );
    }
}

// Home = HocComponent(Home,"pink");
//新的组件 = connect(值)(组件)
Home= connect("red")(Home);
export default Home;
