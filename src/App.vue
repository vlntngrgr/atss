<template>
  <div id="app">
    <div class="my-background"></div>
    <nav-primary />
    <div v-if="false" id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/services">Services</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view/>

    <div class="container">
        <div class="row">
          <small-card 
            title="Accueil" 
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros, ac elementum sapien ex sit amet sapien. Fusce mattis eu metus et fringilla. Aliquam ornare lacus et mi convallis, eget suscipit sem tincidunt. Donec venenatis felis et massa." 
            class="col-md-5 col-s-8 mt-5"/>
          <small-card 
            title="Services" 
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros, ac elementum sapien ex sit amet sapien. Fusce mattis eu metus et fringilla." 
            class="col-md-5 offset-md-2 col-s-8 mt-5"/>
          <small-card 
            title="Blog" 
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros." 
            class="col-md-5 col-s-8 mt-5"/>
          <small-card 
            title="Contact" 
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            class="col-md-5 offset-md-2 col-s-8 mt-5"/>
        </div>
      </div>
  </div>
</template>

<script>
import NavPrimary from '@/components/navigations/primary';
import SmallCard from '@/components/cards/small';

export default {
  components: {
    NavPrimary,
    SmallCard
  }
}
</script>

<style>
#app {
  
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
} 
</style>
