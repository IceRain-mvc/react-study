class Watcher {

    /*
    * {"commit": 函数,  "star":函数}
    *
    * */
    constructor() {
        this.obj = {};
    }


    //广播
    publish(key, args) {
        let keys = Object.keys(this.obj);
        keys.forEach((item) => {
            if (key === item) {
                this.obj[key](args)
            }
        })
    }

    //publish("zhangsan","12345")


    /*
    * 订阅
    * */
    subscribe(key, callback) {
        this.obj = {key: callback}
    }

    //subscribe("zhangsan",()=>{})


}
