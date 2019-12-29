<template>
  <main class="container-fluid mt-5 mb-5">
    <header>
      <h2 class="text-center">{{ article.title }}</h2>
      <h4>{{ article.subtitle }}</h4>
    </header>

    <section>
      <div v-for="content in article.content" :key="'content_' + Math.floor(Math.random() * 1000)">
        <p v-if="content.type === 'string'" style="position: relative"> {{ content.value }} </p>
        <img  v-if="content.type === 'image'" :src="content.value" class="wrap-xl p-3" :style="`position: relative; float: ${content.align};`" alt="..." />
      </div>
    </section>

    <footer>

    </footer>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState({
        articles: state => state.blog.articles,
        article: state => state.blog.current_article,
      }),
      id() {
        return this.$route.params.id;
      }
    },

    methods: {
      ...mapActions({
        viewArticle: 'blog/view'
      })
    },

    mounted() {
      this.viewArticle(this.id).then((article) => {
        console.log(article);
      });
    }
  }
</script>