class Watcher01 {
    constructor() {
        // this.callback = null;

        /*
        * "dog":回调
        * "father":回调 
        *
        * */

        this.obj = {};
        window.obj = this.obj;
    }

    /*发布*/
    publish(key,msg) {
        // this.callback(msg);
        if (this.obj[key]) {
            this.obj[key](msg);
        }
    }


    /*订阅*/
    subscribe(key,callback) {
        this.obj[key] = callback;
        /*
        * obj={"dog":callback}
        * */
        // this.callback = callback;

    }
}

export default new Watcher01();
/*
* new Watcher01()
* new Watcher01()
*
* */
