import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">👋</span>', {
    html: true
  })
  .type("&nbspHi&nbspthere!&nbspI'm&nbspSandul&nbspRenuja")
  .pause(1500)
  .delete(13, { deleteSpeed: 150 })
  .pause(1000)
  .type("A Designer")
  .pause(1000)
  .delete(10, { deleteSpeed: 150 })
  .type("A Developer")
  .pause(1000)
  .go();
