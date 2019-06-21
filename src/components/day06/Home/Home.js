import React, {Component} from 'react';
import Kitchen from "./Kitchen";
import Bathroom from "./Bathroom";
import DogRoom from "./DogRoom";

class Home extends Component {
    render() {
        return (
            <div>
                <Kitchen />
                <hr/>
                <Bathroom />
                <hr/>
                <DogRoom/>
            </div>
        );
    }
}

export default Home;
