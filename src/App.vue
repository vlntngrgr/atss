<template>
  <div id="app">
    <div class="my-background"></div>
    <nav-primary />
    <!-- <div v-if="false" id="nav">
      <router-link :to="{name: 'home'}" exact>Accueil</router-link> |
      <router-link to="/services">Services</router-link>
      <router-link to="/blog">Blog</router-link>
    </div> -->
    <div class="container-fluid" style="margin-top: 5rem;">
      <div>
        <ui-carousel v-if="showSlider"/>

        <button class="btn btn-secondary" @click="showSlider = !showSlider">
          v
        </button>
      </div>

      <div class="">
        <router-view/>
      </div>
    </div>

    <!-- <block-footer v-if="false" /> -->
  </div>
</template>

<script>
import NavPrimary from '@/components/navigations/primary';
import BlockFooter from '@/components/blocks/footer';
import UiCarousel from '@/components/ui/slider';

export default {
  components: {
    NavPrimary,
    BlockFooter,
    UiCarousel
  },

  watch: {
    showSlider: {
      handler: (val, oldVal) => {
        localStorage.setItem('showSlider', val);
      },
      immediate: true
    }
  },

  data() {
    return { 
      showSlider: true
    };
  },

  mounted() {
    if(localStorage.getItem('showSlider')) {
      this.showSlider = localStorage.getItem('showSlider');
    }
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

footer {
  color: white;
}

footer h3 {
  border-bottom: 2px solid white;
}

.my-footer__link {
  border-radius: 5px;
  border: 2px solid white;
}

.my-footer__copy {
  width: 100%;
  text-align: right;
}

.my-footer__link-container {
  font-size: 1.2rem;

  border-bottom: 2px solid white;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
}

.box-s {
  width: 2.5rem;
}

.facebook {
  width: 2.5rem;
  height: 2.5rem;
}

@media screen and (min-width: 767px) {
  .box-s {
    width: 20rem;
    border: none;
  }

  .facebook {
    width: 3rem;
    height: 3rem;
  }
}

.my-card {
  padding: 0 !important;

  background: rgba(0, 0, 0, 0.3);
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), transparent);
  border: none;
}

.my-card__title {
  border-bottom: 1px solid white;

  text-align: right;

  padding-right: 3rem;
}

.my-card__body {
  height: 100%;
  width: 100%;
}

.wrap-xxs {
  width: 1.25rem;
  height: auto;
}

.wrap-xs {
  width: 2rem;
  height: auto;
}

.wrap-xms {
  width: 45px;
  height: auto;
}


.wrap-s {
  width: 64px;
  height: auto;
}

.wrap-m {
  width: 128px; 
  height: auto;
}

.wrap-l {
  width: 256px; 
  height: auto;
}

.wrap-xl {
  width: 384px;
  height: auto;
}

.wrap-xxl {
  width: 512px; 
  height: auto;
}

.card-link {
  position: absolute;
  right: 0rem;
  bottom: 0;

  width: 15rem;
  color: white;
  font-size: 1.2rem;
  text-align: center;

  border-top: 1px solid white;
}

.card-link:before {
  content: '';

  width: 1rem;
  height: 2.1rem;

  position: absolute;
  left: -.65rem;
  top: 1px;

  transform: rotate(30deg);
  border-left: 1px solid white;
}

.card-img {
  display: flex;
  align-items: flex-end;
}
</style>
