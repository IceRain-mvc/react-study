import axios from "axios";

export default function request(url, params) {
    return function (next) {
        params = params || {};
        axios.get(url, params).then((res) => {
            next({type: "ADD_ALL", data: res.data.qTypeQs})
        })
    }
}

/*
* export fn(){}
*
*
* 调用 this.props.save(fn)
* */
