<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <section class="panel panel-default">
          <header>
            <h2 class="panel-title">Quotes</h2>
          </header>
          <div class="panel-body">
            <button @click="checkLogin" class="btn btn-danger">Checklogin</button>
            <button @click="checkPublic" class="btn btn-danger">Check Public</button>
            <button @click="checkPrivate" class="btn btn-danger">Check Private</button>
            <button @click="checkNewLogin" class="btn btn-success">Check New Login</button>
            <button @click="checkAuthentication" class="btn btn-success">Check Authentication</button>
            <button @click="checkHandleAuthentication" class="btn btn-success">Check Handle Authentication</button>
            <a href="http://localhost:8082/login" class="btn btn-warning">Check login with direct link</a>
            <div @click="logout" class="btn btn-brand">Log out</div>
            <div v-if="!fetching">
              <div v-if="!quotes.length" style="padding: 50px; text-align: center;">
                <h1 v-html="shrugGuy"></h1>
                <h2>There are no quotes.</h2>
                <router-link v-bind:to="{ name: 'NewQuote' }" class="btn btn-brand">Add the first Quote</router-link>
              </div>
              <table class="table table-hover" v-if="quotes.length">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Quote</th>
                    <th scope="col" class="pull-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(quote, index) in quotes" v-bind:key=index>
                    <th scope="row" :key="'quote-'+index">{{index +1}}</th>
                    <td>
                      <blockquote>
                        <p>{{quote.text}}</p>
                        <footer>
                          <cite>{{quote.author}}</cite>
                        </footer>
                      </blockquote>
                    </td>
                    <td class="pull-right">
                      <router-link v-bind:to="{name: 'EditQuote', params: {id: quote._id}}" :key="'bob-'+index" class="btn btn-warning">Edit
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="errors.api" style="padding: 50px; text-align: center;">
              <h1 v-html="shrugGuy"></h1>
              <h2 class="color-danger">No API connection.</h2>
            </div>
          </div>
          <footer v-if="quotes.length">
            <router-link v-bind:to="{ name: 'NewQuote' }" class="btn btn-brand btn-lg">
              + Add Quote
            </router-link>
          </footer>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import QuotesService from "@/services/QuotesService";
  import AuthenticationService from "@/services/AuthenticationService";

  export default {
    name: "quotes",
    data() {
      return {
        fetching: true,
        errors: {
          api: false
        },
        shrugGuy: "¯\\_(ツ)_/¯¯",
        quotes: []
      };
    },
    mounted() {
      this.getQuotes();
      this.drawShrug();
    },
    methods: {
      async getQuotes() {
        try {
          const response = await QuotesService.fetchQuotes();
          this.fetching = false;
          this.quotes = response.data.quotes;
        } catch (e) {
          this.errors.api = true;
          console.log("error: ", e);
        }

      },
      drawShrug() {
        setInterval(() => {
          if (this.shrugGuy === "¯\\_(ツ)_/¯¯") {
            this.shrugGuy = "¯¯\\_(ツ)_/¯";
          } else {
            this.shrugGuy = "¯\\_(ツ)_/¯¯";
          }
        }, 1000);
      },
      async checkLogin() {
        const response = await AuthenticationService.checkLogin();
        console.log("Response?", response);
      },
      async logout() {
        const response = await AuthenticationService.logout();
        console.log("response here?", response);
      },
      async checkPublic() {
        try {
          const response = await AuthenticationService.checkPublic();
          console.log("Response from checkPublic: ", response);
        } catch (e) {
          console.log("check public error: ", e);
        }
      },
      async checkPrivate() {
        try {
          const response = await AuthenticationService.checkPrivate();
          console.log("Response from checkPrivate: ", response);
        } catch (e) {
          console.log("Check private error: ", e);
        }
      },
      async checkNewLogin() {
        try {
          const response = await AuthenticationService.newLogin();
          console.log("Response from new login: ", response);
        } catch (e) {
          console.log("check new login error: ", e);
        }
      },
      async checkAuthentication() {
        try {
          const response = await AuthenticationService.isAuthenticated();
          console.log("Response from check authentication: ", response);
        } catch (e) {
          console.log("check new login error: ", e);
        }
      },
      async checkHandleAuthentication() {
        try {
          const response = await AuthenticationService.handleAuthentication();
          console.log("Response from check handle authentication: ", response);
        } catch (e) {
          console.log("check new login error: ", e);
        }
      }

    }
  };
</script>

<style scoped>
  footer {
    text-align: center;
  }
</style>