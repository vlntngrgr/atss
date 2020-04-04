<template>
    <div class="services">
        <small-card
          title="Services"
          :descr="content[0]"
        />

        <div class="services__content">
          <small-card 
              class="services__card"
              v-show="i !== 0"
              v-for="(c, i) in content"
              :key="`service_${i}`"
              :title="c.title"
              :link="{ name: 'service', params: { name: c.name }}"
            />
        </div>  
    </div>
</template>

<script>
import Services from '@/assets/services'
import SmallCard from '@/components/cards/small'

export default {
  components: {
    SmallCard
  },
  
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
  }
}
</script>