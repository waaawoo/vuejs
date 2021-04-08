import Vue from 'vue'
// コンポーネントオブジェクトを呼び出している
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false

// グローバルインポートしたファイルのメソッドを呼び出し
Vue.component("LikeNumber", LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
