import Api from "@/services/Api";

export default {
    login (params) {
        return Api().get("login", params);
    }
};
