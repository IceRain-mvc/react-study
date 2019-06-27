import axios from "axios";
import {ADD_OBJ} from "../store/action/action";

export function request(next) {

    axios.get("/api/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2").then((res)=>{
        console.log(res.data);
        next({type:ADD_OBJ, data: res.data})
    })
}

export function requestDetail(id,fn) {
    console.log(id);
    axios.get("/api/api/url/index?movid=2596&urlid="+id+"&app=fytv&device=android&version=3.0.2").then((res)=>{
        console.log(res);
        fn&&fn(res.data);

    })

}
