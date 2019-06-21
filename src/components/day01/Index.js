// rcc
// rccp
import React, {Component} from 'react';
import List from "./List";

class Index extends Component {
    constructor(props) {
        super(props);
        //vue  : 改变数据 页面发生改变  data :
        this.aaa = "zhangsa";
        this.state = {
            name: "zhangsan",
            age: 20,
            list: ["西瓜", "香蕉", "茄子", "黄瓜"],
            flag: true,
            persons: [{name: "张三丰", age: 108}, {name: "玄冥二老", age: 100}, {name: "张无忌", age: 30}]
        }
    }

    clickItem(item, index) {
        //this.list
        // this.setState({
        //     list:["草莓","草莓","草莓","草莓","草莓"]
        // });
        // alert(item);

        // this.state.list[index] = "草莓";
        // //想要改变数据 必须 setState
        //
        // //重新熏染页面 --->render
        // this.setState({
        //
        // })

        //创建一个新的
        let arr = this.state.list;
        arr[index] = "草莓";

        this.setState({
            list: arr
        })

    }

    render() {

        let {list, flag, name, age,persons} = this.state;
        // this.setState({});
        //虚拟Dom
        return (
            <div>
                <div>
                    {name}
                </div>
                <h1>
                    {age}
                </h1>
                {
                    //map:有返回值  foreach
                    list.map((item, index) => {
                        return <li key={index} onClick={this.clickItem.bind(this, item, index)}>
                            {item}
                        </li>
                    })
                }

                {

                    persons.map((item,index)=>{
                        return <List name={item.name} age={item.age}/>
                    })
                }
                <button onClick={() => {
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>{flag ? "老虎" : "狮子"}</button>

                {flag &&
                <img width={200} src="https://c2.staticflickr.com/8/7376/27466438332_28ea5e5e7a_b.jpg" alt=""/>
                }

                {!flag &&
                <img width={200} src="https://m.zgjm.org/uploads/allimg/140523/1_140523192245_1.jpg" alt=""/>
                }

            </div>

        );
    }
}

export default Index;
