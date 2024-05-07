import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';

import '@/assets/styles/icon.css';
import '@/assets/styles/global.scss';
import '@/assets/styles/_iconfont.scss';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
