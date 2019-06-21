import React, {Component} from 'react';
import Dog from "./Dog";
import Dog2 from "./Dog2";

class DogRoom extends Component {
    render() {
        return (
            <div>
                <Dog/>
                <Dog2/>
            </div>
        );
    }
}

export default DogRoom;
