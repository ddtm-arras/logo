// Le fichier js qui génère la signature




var app = new Vue({
  el: '#app',
  data: {
    prenom   : '',
    nom      : '',
    fonction : '',
    fix      : '',
    mobile   : '',
    code     : false
  },
  computed: {
    signature: function () {
      var activateon = this.prenom+this.nom+this.function+this.fix+this.mobile;
      return this.$el.querySelector("#result").innerHTML;
    }
  },
  methods: {
    br: function (v) {
      return v.split("\n").join("<br>\n")
    },
    toggleCode: function() {
      this.code = !this.code;
    }
  },
  created: function () {
    new ClipboardJS('.btn')
  }
})


