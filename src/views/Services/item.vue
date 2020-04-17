<template>
    <div class="services">
       <small-card
          :title="service.title"
          :descr="content"
        />

        <div class="services__content row mx-auto">
          <x-small-card 
              class="services__card"
              :class="i === 0 ? 'col-md-12' : ''"
              v-for="(c, i) in items"
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
    service() {
      let ret = null;

      Object.keys(Services).forEach((name, index) => {
        if(Services[name].link === this.$route.params.name) {
          ret = Services[name]
        }
      });
      return ret
    },

    content() {
      let ret = [`<div class="content">`];

      this.service.content.forEach((o, i) => {
        if(i % 2 === 0) {
          ret.push(`<div class="row">`)
        }

        if(o.type === 'string') {
          ret.push(`<p class="col-12 col-md-8">${o.value}</p>`)
        } else if(o.type === 'image') {
          ret.push(`<img class="text-img img-fluid col-12 col-md-4" src="${o.value}" alt="${o.value}" />`);
        }

        if(i % 2 === 0  && i !== 0) {
          ret.push('</div>')
        }
      })

      ret.push(`</div>`)

      return ret.join(' ');
    },

    items() {
      let ret =  Object.values(Services).filter((content, index) => {
        if(index === 0) {
          return false;
        }
        return true;
      });

      return ret;
    }
  }
}
</script>
