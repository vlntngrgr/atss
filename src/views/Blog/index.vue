<template>
  <div class="container-fluid" style="margin-top: 2rem; margin-bottom: 10rem;">
    <div class="row no-gutters d-flex p-2 " v-if="articles">
      <router-link :to="{ name: 'blog-article', params: {id: article.id} }" class="col-3 card text-white" v-for="article in articles" :key="`articles_${article.id}`">
        <img :src="article.display_img" class="card-img-top img-fluid" style="height: 200px;" alt="...">

        <div class="bg-dark card-content w-100">
          <div class="card-body">
            <h4 class="card-title">{{ article.display_title }}</h4>
            <p>{{ article.display_descr }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <div v-else class="text-center w-100">
      <h1>Aucun articles pour l'instant</h1>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState({
        articles: state => state.blog.articles,
      })
    },

    methods: {
      ...mapActions({
        initBlog: 'blog/init'
      })
    },

    // data() {
    //   return {
    //     articles: null
    //   };
    // },

    created() {
      this.initBlog()
        .catch((error) => {
          console.error(error);
        });
    }
  } 
</script>