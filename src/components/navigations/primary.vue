<template>
  <div class="atss-menu">
    <a onclick="return gtag_report_conversion('tel: 0497301084');" href="tel:0497301084" class="atss-menu__phone">
      <span class="number">0497301084</span>
    </a>

    <div class="atss-menu__banner">
        <router-link
          :to="{ name: 'home' }"
          class="title d-lg-block d-none"
        >Arnaud Toussaint Services Serrurier</router-link>

        <router-link
          :to="{ name: 'home' }"
          class="title-small d-block d-lg-none"
        >ATSS</router-link>

        <img src="/images/logo.png" alt="Logo ATSS" class="logo d-none d-s-block" />
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark position-fixed fixed-top fixed-right">
      <a class="navbar-brand" href="/"></a>
      <button class="navbar-toggler" style="fill: white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse position-fixed fixed-top mt-5 atss-nav" id="navbarNav" style="background-color: #192DA1; text-align:center">
        <ul class="navbar-nav">
          <li class="nav-item" style="padding-left: 1rem; padding-right: 1rem">
            <router-link class="nav-link" :class="isActive('home') ? 'active' : ''" tag="a" :to="{name: 'home'}" href="/" style="color: white;">Acceuil</router-link>
          </li>
          <li class="nav-item" style="padding-left: 1rem; padding-right: 1rem">
            <router-link class="nav-link"  :class="isActive('services') ? 'active' : ''" href="/services" tag="a" :to="{name: 'services'}" style="color: white;">Services</router-link>
          </li>
          <li class="nav-item" style="padding-left: 1rem; padding-right: 1rem">
            <a class="nav-link" target="_blank" href="https://atsserrurier.be/blog"  style="color: white;">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import ServicesContent from "@/assets/services";

export default {
  name: "MainMenu",

  computed: {
    Services() {},
    itemClasses() {
        let ret = 'atss-menu__items ';

        if(this.menu) ret += 'active';
        else ret += 'disabled';

        return ret;
    },
    state() {
        return this.menu;
    }
  },

  methods: {
    isActive(name) {
      return this.$route.meta.menu === name;
    },

    displayServices() {
      this.showServices = true;
    },

    setmenu(menu) {
        this.menu = menu;
    }
  },

  data() {
    return {
      showServices: false,
      menu: true,
    };
  }
};
</script>
