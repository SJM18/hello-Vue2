import { Component, Vue } from "vue-property-decorator";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Home from "./components/Home.vue";
import Router from "./Router";

Vue.use(VueMaterial);

@Component({
    router: new Router().router,
    components: {
        Home,
    },
})
export default class App extends Vue {

    private menuVisible: boolean = false;

    get menuVisibility(): boolean {
        return this.menuVisible;
    }
    set menuVisibility(value: boolean) {
        this.menuVisible = value;
    }
}