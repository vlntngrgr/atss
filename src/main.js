import Vue from 'vue'
import App from './App.vue'
import router from './router'

import bootstrap from './bootstrap'

import './style/utils.scss'
import './style/app.scss'

Vue.config.productionTip = false


bootstrap().then((http) => {
    Vue.prototype.$http = http;

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app');
})
