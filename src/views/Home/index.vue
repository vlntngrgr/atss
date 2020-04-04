<template>
  <main class="home">
      
      <small-card 
        class="home__card"
        title="Accueil" 
        descr="Description rapide de cet onglet" 
      />

      <small-card 
        class="home__card"
        title="Services" 
        descr="Description rapide de cet onglet" 
      />
      
      <small-card 
        class="home__card"
        title="Blog" 
        descr="Description rapide de cet onglet"
      />
      
      <small-card 
        class="home__card"
        title="Contact" 
        descr="Description rapide de cet onglet" 
      />

  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import SmallCard from '@/components/cards/small';

  export default {
    components: {
      SmallCard
    },
    computed: {
      ...mapState({})
    },
    methods: {
      ...mapActions({
        initArticles: 'blog/init'
      })
    },
    created() {
      this.initArticles().then((articles) => {
        console.log(articles);
      });
    }
  }
</script>