<template>
  <div class="about">
    <p v-for="c in content" :key="c">
      {{ c }}
    </p>
  </div>
</template>

<script>
import Services from '@/assets/services'
export default {
  computed: {
    title() {
      return Services['Services'];
    },

    content() {
      return Object.values(Services).filter((content, index) => {
        if(index === 'Services'){
          return false;
        }

        return true;
      });
    }
  },

  created() {
    console.log(Services);
  }
}
</script>