<template>
  <main class="container-fluid" style="width: 100% !important;">
    <div class="row justify-content-around">
      <small-card 
        title="Accueil" 
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros, ac elementum sapien ex sit amet sapien. Fusce mattis eu metus et fringilla. Aliquam ornare lacus et mi convallis, eget suscipit sem tincidunt. Donec venenatis felis et massa." 
        class="col-md-5 col-s-8 mt-5"/>
      <small-card 
        title="Services" 
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros, ac elementum sapien ex sit amet sapien. Fusce mattis eu metus et fringilla." 
        class="col-md-5 col-s-8 mt-5"/>
      <small-card 
        title="Blog" 
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tempor efficitur. Nullam porta, erat id lacinia ultrices, nibh ex pretium eros." 
        class="col-md-5 mt-5"/>
      <small-card 
        title="Contact" 
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        class="col-md-5 col-s-8 mt-5"/>
    </div>
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