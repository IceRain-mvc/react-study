import React, {Component} from 'react';

class Day06 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            food: ""
        }
    }



    submit(e) {
        console.log(e);

        //阻止事件冒泡
        // e.stopPropagation();

        //阻止默认事件
        e.preventDefault();
    }

    change(e) {
        this.setState({
            food: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        value: e.target.value
                    })
                }}/>
                {this.state.value}
                <form onSubmit={this.submit.bind(this)}>
                    <label>
                        <select value={this.state.food} onChange={this.change.bind(this)}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">酸橙</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>

                    </label>

                    <input type="submit"/>
                </form>

                <h2>{this.state.food}</h2>

            </div>
        );
    }
}

export default Day06;
