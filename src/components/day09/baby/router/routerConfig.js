import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import Child1 from "../views/pageone/Child1";
import Child2 from "../views/pageone/Child2";
import Child3 from "../views/pageone/Child3";
import Detail from "../views/Detail";
import Song from "../baby/Song";
import Story from "../baby/Story";
import Cartoon from "../baby/Cartoon";

export const routes = [
    {path:"/babyLook",component:PageOne,children:[
            {path:"/babyLook/song",component:Song},
            {path:"/babyLook/story",component:Story},
            {path:"/babyLook/cartoon",component:Cartoon},
            {path:"/home",redirect:"/home/child1"}
        ]},
    {path:"/babyListen",component:PageTwo},
    {path:"/me",component:PageThree},
    {path:"/",redirect:"/babylook"}
];

/*
* 问题1:  用的时候  RouterView
* 问题2:  子路由
* */
