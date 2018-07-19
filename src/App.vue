<template>
    <div id="app">
        <router-view/>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    import "@/assets/js/designguide";
    import Auth0Lock from "auth0-lock";
    // Initializing our Auth0Lock
    const lock = new Auth0Lock(
        'QQ6uLVB2XK4uPNcE5YbmSepyhtaO4LyM',
        'pxquotes.eu.auth0.com'
    );

    console.log("Lock?", lock);

    // Listening for the authenticated event
    lock.on("authenticated", function (authResult) {
        // Use the token in authResult to getUserInfo() and save it to localStorage
        lock.getUserInfo(authResult.accessToken, function (error, profile) {
            if (error) {
                // Handle error
                return;
            }

            console.log("Did we get profile?", profile);

            // document.getElementById('nick').textContent = profile.nickname;

            // localStorage.setItem('accessToken', authResult.accessToken);
            // localStorage.setItem('profile', JSON.stringify(profile));
        });
    });

    lock.show();

    export default {
        name: "App"
    };
</script>

<style>
    @import "./assets/less/designguide.less";
    /* @import "./assets/less/style.less"; */

    @import "./assets/less/snotify.less";
</style>