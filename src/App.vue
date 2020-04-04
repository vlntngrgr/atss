<template>
  <div id="app" class="atss">
    <div class="atss__background"></div>
    
    <nav-primary />
    <div>
      <div>
        <ui-carousel />
      </div>

      <div>
        <router-view/>
      </div>
    </div>
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