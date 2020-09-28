import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    /**
     *
     */
    constructor() {
        super();
    }

    private msg: string = "Pék";

    get Msg(): string {
        return this.msg;
    }

    set Msg(value: string) {
        this.msg = value;
    }
}