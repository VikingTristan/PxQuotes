<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 offset-md-3">
        <section class="panel panel-default">
          <header>
            <h2 class="panel-title">Welcome</h2>
          </header>

          <div class="panel-body text-center">
            <div class="center">
              <!-- <div class="loader loader-large loader-muted d-block" v-if="loading">
                <ul class="loader-icon">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div> -->
              <!-- <div v-else> -->
                <h3 class="color-success">Hi, welcome...</h3>
              <!-- </div> -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from "@/services/AuthenticationService";

  export default {
    name: "Callback",
    mounted() {
      // this.login();
    },
    data() {
      return {
        loading: true,
        showError: false
      };
    },
    methods: {
      // async login() {
      //   await AuthenticationService.login()
      //     .then(() => {
      //       this.$snotify.success("Logged in.");
      //       this.$router.push({
      //         name: "Quotes"
      //       });
      //     })
      //     .catch(e => {
      //       console.log("unable to log in: ", e);
      //       this.$snotify.error("Unable to log in.");
      //       this.showError = true;
      //       this.loading = false;
      //     });
      // }
    }
  };
</script>

<style>
  .panel-body {
    height: 300px;
    position: relative;
  }

  .panel-body .loader, .panel-body .h3 {
    width: 50%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>