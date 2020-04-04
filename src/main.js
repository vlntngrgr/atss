import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bootstrap from './bootstrap'

import './style/utils.scss'
import './style/app.scss'
import './style/1024.scss'

Vue.config.productionTip = false


bootstrap().then((http) => {
    Vue.prototype.$http = http;

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
})