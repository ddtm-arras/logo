// Le fichier js qui génère la signature




var app = new Vue({
  el: '#app',
  data: {
    prenom   : '',
    nom      : '',
    fonction : '',
    fix      : '',
    mobile   : '',
    logoDDTMsvg : logoDDTMsvg,
    logoDDTMpng : logoDDTMpng,
    code     : false
  },
  computed: {
    signature: function () {
      var activateon = this.prenom+this.nom+this.fonction+this.fix+this.mobile+this.imgType;
      return this.$el.querySelector("#result").innerHTML;
    }
  },
  methods: {
    br: function (txt) {
      return txt.split("\n").join("<br>\n");
    },
    title: function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    },
    toggleCode: function() {
      this.code = !this.code;
    }
  },
  ready: function () {
    new ClipboardJS('.btn');
    this.$el.querySelector("input").focus();
  }
})


