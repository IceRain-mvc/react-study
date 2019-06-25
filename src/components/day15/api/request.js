import axios from "axios";

export default function request(next) {

    axios.get("http://localhost:3000/api").then((res)=>{
        console.log(res.data);

    })

}
