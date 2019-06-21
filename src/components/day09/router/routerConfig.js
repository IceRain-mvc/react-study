import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import Child1 from "../views/pageone/Child1";
import Child2 from "../views/pageone/Child2";
import Child3 from "../views/pageone/Child3";
import Detail from "../views/Detail";

export const routes = [
    {path:"/home",component:PageOne,children:[
            {path:"/home/child1",component:Child1},
            {path:"/home/child2",component:Child2},
            {path:"/home/child3",component:Child3},
            {path:"/home",redirect:"/home/child1"}
        ]},
    {path:"/detail",component:PageTwo},
    {path:"/me",component:PageThree},
    {path:"/video/:id",component:Detail},
    {path:"/",redirect:"/home"}
];

/*
* 问题1:  用的时候  RouterView
* 问题2:  子路由
* */
