<template>
    <div id="app">
        <router-view/>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
    @import "./assets/less/designguide-0.6.0.less";
    /* @import "./assets/less/style.less"; */
    @import "./assets/less/snotify.less";
</style>