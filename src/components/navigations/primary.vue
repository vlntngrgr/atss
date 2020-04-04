<template>
  <nav class="atss-menu">
    <a href="tel:0497301084" class="atss-menu__phone">
      <span class="number">0497301084</span>
    </a>
    <!-- button --> 

    <div class="atss-menu__banner">
        <router-link
            :to="{ name: 'home' }"
            class="title"
        >Arnaud Toussaint Services Serrurie</router-link>

        <router-link
            :to="{ name: 'home' }"
            class="title-small"
        >A T S S</router-link>

        <img src="/images/logo.png" alt="Logo ATSS" class="logo" />
    </div>

    <div 
        class="atss-menu__toggle" 
        @mouseover="setmenu(true)" 
        @mouseout="setmenu(false)" 
        @click="setmenu(true)">

        <div class="atss-menu__toggler">
            Menu
        </div>

        <ul :class="itemClasses">
            <router-link
                tag="li"
                :to="{ name: 'home' }"
                class="atss-menu__item"
                active-class="active"
                :active="isActive('home')"
                exact
            >Accueil</router-link>

            <router-link
                tag="li"
                :to="{ name: 'services' }"
                class="atss-menu__item"
                active-class="active"
                :active="isActive('services')"
                exact
            >Services</router-link>

            <div v-if="false" class="atss-menu__subitems">
                <router-link
                v-for="s in services"
                :key="s.id"
                tag="li"
                :to="{ name: 'service', params: { name: 'service-1' } }"
                class="atss-menu__subitem"
                active-class="active"
                :active="isActive('services')"
                exact
                >{{ s.label }}</router-link>
            </div>

            <router-link
                tag="li"
                :to="{ name: 'blog' }"
                class="atss-menu__item"
                active-class="active"
                :active="isActive('blog')"
                exact
            >Blog</router-link>
        </ul>
    </div>

  </nav>
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
