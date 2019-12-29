<template>
  <div id="app">
    <div class="my-background"></div>
    <nav-primary />
    <div v-if="false" id="nav">
      <router-link :to="{name: 'home'}" exact>Accueil</router-link> |
      <router-link to="/services">Services</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view/>

    <block-footer />
  </div>
</template>

<script>
import NavPrimary from '@/components/navigations/primary';
import BlockFooter from '@/components/blocks/footer';

export default {
  components: {
    NavPrimary,
    BlockFooter,
  }
}
</script>

<style>
#app {
    height: 100%;
    width: 100%;

    overflow: hidden;
}
.my-background {
  background-image: url('/images/fond.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: .2;

  overflow: hidden;
} 

a {
  color: white !important;
}

a:hover {
  color: white !important;
}
</style>
