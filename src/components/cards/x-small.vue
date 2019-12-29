<template>
  <div class="card text-white bg-none my-card">
    <div class="row no-gutters my-card__body">
      <div class="col-md-4 col-s-10 card-img pt-5">
        <img :src="article.display_img" class="card-img-top rounded my-img" alt="...">
      </div>

      <div class="col-md-8 col-s-10 bg-dark card-content" style="width: 100%">
        <div class="card-body">
          <h4 class="card-title my-card__title">{{ article.display_title }}</h4>
          <p v-if="article.display_descr">{{ descr }}</p>
          <router-link v-if="false" :to="{name: 'home'}" class="card-link">Go!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
}
</script>