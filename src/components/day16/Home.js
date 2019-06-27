import React, {Component} from 'react';

import {
    Button,
    Pagination,
    DatePicker, Table
} from "antd";

let {MonthPicker} = DatePicker;

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

window.dataSource = dataSource;

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
            return <a onClick={() => {
                // alert(record)
                console.log(record);
                /*  操作对象*/
                // delete dataSource[parseInt(record.key - 1)];

                dataSource.forEach((item,index)=>{
                    if (item.key === record.key) {
                        dataSource.splice(index, 1);
                        that.setState({})
                    }
                })
            }
            }>删除</a>
        }
    }


];


let that = null;
class Home extends Component {
    constructor(props) {
        super(props);
        that = this;
    }

    render() {
        return (
            <div>
                <Button type="primary" disabled size="large">按钮</Button>
                <Button type="dashed">按钮</Button>
                <Button type="danger" icon="search" size="small">按钮</Button>
                <Button type="link">按钮</Button>

                <Pagination defaultCurrent={1} total={500}/>

                <DatePicker onChange={this.dataChange.bind(this)}/>
                <MonthPicker onChange={this.dataChange.bind(this)}/>

                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }

    dataChange(e) {
        console.log(e);
    }
}

export default Home;
