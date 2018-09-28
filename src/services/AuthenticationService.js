import Api from "@/services/Api";
import Auth0 from "auth0-js";
import EventEmitter from "EventEmitter";

const au = new Auth0.WebAuth({
    domain: "pxquotes.eu.auth0.com",
    clientID: "QQ6uLVB2XK4uPNcE5YbmSepyhtaO4LyM",
    redirectUri: "http://localhost:8080",
    responseType: "token id_token",
    scope: "openid"
});

export default {
    authNotifier: new EventEmitter(),
    handleAuthentication() {
        au.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                console.log("Session set!", authResult);
                // router.replace("/");
            } else if (err) {
                // router.replace("/");
                console.log(err);
            }
        });
    },
    setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        this.authNotifier.emit("authChange", {
            authenticated: true
        });
    },
    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.userProfile = null;
        this.authNotifier.emit("authChange", false);
        // navigate to the home route
        router.replace("home");
    },
    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    },
    login() {
        return Api().get("login");
    },
    newLogin() {
        return au.authorize();
    },
    checkLogin() {
        return Api().get("checklogin");
    },
    logout() {
        return Api().get("logout");
    },
    checkPublic() {
        return Api().get("public");
    },
    checkPrivate() {
        return Api().get("private");
    },
    authenticated() {
        console.log("Authenticated? : ", this.isAuthenticated());
        return this.isAuthenticated();
    },
};