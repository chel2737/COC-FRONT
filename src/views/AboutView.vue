<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Big Ben</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200">fdfdf</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    //
  }
  authenticate(){
    this.axios.get('')
      .then(
        (response) => {
            let users = response.data;
            let found = false;
            for(let index in users){
              if(this.login == users[index].login && this.password == users[index].password){
                this.$router.push('/users/' + this.myID);
                found = true;
                break;
              }
            }
            if(!found)
              window.alert('пользователь не найден')
        }
      )
  }
</script>