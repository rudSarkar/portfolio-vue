<template>
  <v-app>
    <v-toolbar  light fixed app>
      <v-toolbar-title>Portfolio Demo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/about">About</v-btn>
        <v-btn flat to="/experience">Experience</v-btn>
        <v-btn flat to="/portfolio">Portfolio</v-btn>
        <v-btn flat to="/contact">Contact</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
            <v-list-tile-content>
              <v-btn flat to="/">Home</v-btn>
              <v-btn flat to="/about">About</v-btn>
              <v-btn flat to="/experience">Experience</v-btn>
              <v-btn flat to="/portfolio">Portfolio</v-btn>
              <v-btn flat to="/contact">Contact</v-btn>
            </v-list-tile-content>
        </v-list>
      </v-menu>
    </v-toolbar>


    <v-content>
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}

@media(max-width:991px) {
  .banner_content {
    margin-top: 150px
  }
  .container {
    max-width: 960px;
  }
}
</style>
