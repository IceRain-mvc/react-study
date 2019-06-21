class App {
    getName(){
        console.log(this)

    }

    static getAge(){
        console.log(this)
    }
}

let app = new App();
//static 方法属于构造  类
App.getAge();
