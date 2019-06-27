import Video from "../views/Video";
import Audio from "../views/Audio";
import Introduce from "../views/Introduce";

const routes = [
    {path:"/video",component:Video},
    {path:"/audio",component:Audio},
    {path:"/introduce",component:Introduce},
    {path:"/",redirect:"/video"},
];


export default routes;
