// import mock from "../mock.js";
/*
* 筛选
*
* */
export default function filter(mock,value) {
    console.log(mock);
    return mock.filter((item,index)=>{
        if (!value) {
            return false;
        }
        return item.name.includes(value);
    })
}
