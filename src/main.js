import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';


Vue.config.productionTip = false

Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(App),
}).$mount('#app');

function togglePanel(e){
  e.preventDefault();
  this.classList.toggle('show');
  this.nextSibling.classList.toggle('show');
  this.parentNode.classList.toggle('show');

}

let toddleLinks = document.querySelectorAll('.additionally-link'),
    i, button;

for (i = 0; i < toddleLinks.length; i++) {
  button = toddleLinks[i];
  button.addEventListener('click', togglePanel);
}
