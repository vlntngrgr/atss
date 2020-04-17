<template>
    <div class="services">
        <small-card
          title="Services"
          :descr="title"
        />

        <div class="services__content row mx-auto">
          <x-small-card 
            class="services__card row mx-auto"
            :class="i === 0 ? 'col-md-12' : ''"
            v-for="(c, i) in content"
            :key="`service_${i}`"
            :title="c.title"
            :link="{ name: 'service', params: { name: c.link }}"
          />
        </div>  
    </div>
</template>

<script>
import Services from '@/assets/services'
import SmallCard from '@/components/cards/small'
import XSmallCard from '@/components/cards/x-small'

export default {
  components: {
    SmallCard,
    XSmallCard
  },
  
  computed: {
    title() {
      return Services['Services'];
    },

    content() {
      return Object.values(Services).filter((content, index) => {
        if(index === 0){
          return false;
        }

        return true;
      });
    }
  }
}
</script>
