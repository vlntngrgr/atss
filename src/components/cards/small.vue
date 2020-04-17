<template>
  <div :class="classes">
      <header v-if="title" class="atss-card__title">
        <router-link v-if="link" :to="link" >{{title}}</router-link>

        <span v-else v-html="title"></span>
      </header>

      <main v-if="descr" class="atss-card__body" v-html="descr">
      </main>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    link: {
      type: Object,
    },
    descr: {
      type: String,
    }
  },

  computed: {
    classes() {
      return [
        'atss-card',
        "mx-auto",
      ];
    }
  }
}
</script>
