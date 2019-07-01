import React from "react";

let Home = React.lazy(() => import("../components/Home"));
let Detail = React.lazy(() => import("../components/Detail"));
let Me = React.lazy(() => import("../components/Me"));

let routes = [
    {
        path: "/home",
        component: Home

    },

    {
        path: "/detail",
        component: Detail

    },

    {
        path: "/me",
        component: Me

    },
    {
        path: "/",
        redirect: "/home"

    },


];

export default routes;
