<template>
  <div class="col-12 col-md-4 atss-card -xs mx-auto">
    <router-link :to="link" tag="a" class="atss-card__title">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: Object
    }
  }
}
</script>
