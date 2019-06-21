import Look from "../views/Look";
import Me from "../views/Me";
import Song from "../views/Look/Song";
import Cartoon from "../views/Look/Cartoon";
import Story from "../views/Look/Story";
import Listen from "../views/Listen";
import BabySong from "../views/Listen/BabySong";
import BabyStory from "../views/Listen/BabyStory";
import VideoDetail from "../views/VideoDetail";
import Login from "../views/Login";

const routes = [
    {path:"/look",component:Look,children:[
            {path:"/look/song",component:Song},
            {path:"/look/story",component:Story},
            {path:"/look/cartoon",component:Cartoon},
            {path:"/look",redirect:"/look/song"}
        ]},
    {path:"/listen",component:Listen,children:[
            {path:"/listen/song",component:BabySong},
            {path:"/listen/story",component:BabyStory},
            {path:"/listen",redirect:"/listen/song"}
        ]},
    {path:"/me",component:Me},
    {path:"/detail/:id",component:VideoDetail},
    {path:"/login",component:Login},
    {path:"/",redirect:"/look"},

];


export default routes;
