import Vue from "vue";
// import App from "./App";
import App from "./App.vue";
import router from "./router";
import Snotify, {
    SnotifyPosition
} from "vue-snotify";

Vue.config.productionTip = false;

const snotifyOptions = {
    toast: {
        position: SnotifyPosition.rightTop,
        timeout: 2500,
        showProgressBar: false
    }
};

Vue.use(Snotify, snotifyOptions);

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});


//Testing purposes
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;