<template>
    <div id="app">
        <router-view/>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
import DesignGuideScript from "@/assets/js/designguide";
export default {
    name: "App"
};
</script>

<style>
    @import "./assets/less/designguide.less";
    /* @import "./assets/less/style.less"; */
    @import "./assets/less/snotify.less";
</style>