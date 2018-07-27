import Api from "@/services/Api";

export default {
    login () {
        return Api().get("login");
    },
    checkLogin () {
        return Api().get("checklogin");
    },
    logout () {
        return Api().get("logout");
    }
};
