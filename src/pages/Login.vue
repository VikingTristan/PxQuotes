<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 offset-md-3">
        <section class="panel panel-default">
          <header>
            <h2 class="panel-title">Login</h2>
          </header>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <div class="input-group">
                  <input v-model="username" type="text" id="username" class="form-control" placeholder="Enter username" />
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-group">
                  <input v-model="password" rows="6" type="password" id="password" class="form-control" placeholder="Enter password" />
                </div>
              </div>
              <div class="alert alert-error in" v-show="showError">
                <p class="alert-text">Wrong username or password!</p>
              </div>
              <button class="btn btn-brand pull-right" type="button" @click="login">Log in</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
    name: "Login",
    data () {
        return {
            username: "",
            password: "",
            showError: false
        };
    },
    methods: {
        async login () {
            try {
                await LoginService.login({
                    username: this.username,
                    password: this.password
                });
                this.$router.push({
                    name: "Quotes"
                });
            } catch (e) {
                this.showError = true;
                console.log(e);
            }
        }
    }
};

</script>
