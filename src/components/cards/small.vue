<template>
  <div class="card text-white bg-none my-card">
    <div class="row no-gutters my-card__body">
      <div v-if="false" class="col-md-4 col-s-10 card-img pt-5">
        <img src="/images/arnaud.jpg" class="card-img-top rounded my-img" alt="...">
      </div>

      <div class="col-md-8 col-s-10 bg-dark card-content" style="width: 100%">
        <div class="card-body">
          <h4 class="card-title my-card__title">{{ title }}</h4>
          <p>{{ descr }}</p>
          <router-link :to="{name: 'home'}" class="card-link">Go!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true,
    }
  }
}
</script>