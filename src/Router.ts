import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export default class Router
{
    public routes: Array<RouteConfig> = [
        {
            path: "/",
            alias: "/home",
            name: "home",
            component: () => import("./components/Home.vue")
        },
        {
            path: "/about",
            //alias: "/about",
            name: "about",
            component: () => import("./components/About.vue")
        },
        // {
        //     path: "/tutorials/:id",
        //     name: "tutorial-details",
        //     component: () => import("../components/Tutorial.vue")
        // },
        // {
        //     path: "/add",
        //     name: "add",
        //     component: () => import("../components/AddTutorial.vue")
        // }
    ];

    public router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes: this.routes
    });
}