import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './vuetify'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
