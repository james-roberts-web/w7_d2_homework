import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data:{
      greeting: "Exchange Rates",
      rates:[]
    },
    mounted(){
      this.getExchangeRate()
    },
    methods:{
      getExchangeRate: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest");
        console.log(request);
      }
    },
  })
})
