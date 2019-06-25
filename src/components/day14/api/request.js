import axios from "axios";
import {urlBaoBao} from "./api";

/*next 真的dispatch*/
export default function (next) {
    axios.get(urlBaoBao).then((res) => {

        //res.data 存到仓库中
        // dispatch({})

        /*
        * 中间件
        *   looger : 打印
        *   thunk:
        *       dispatch({type:"",})
        *       作用: 改造了dispatch
        *   promise
        *   saga
        *
        * */
        next({type:"ADD_LIST", list: res.data.list})

    });
}
