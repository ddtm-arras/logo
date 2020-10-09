// Le fichier js qui génère la signature




var app = new Vue({
  el: '#app',
  data: {
    prenom:      '',
    nom:         '',
    fonction:    '',
    fix:         '',
    mobile:      '',
    logoDDTMsvg: logoDDTMsvg,
    logoDDTMpng: logoDDTMpng,
    signature:   null,
    copied:      false,
    code:        false
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
    this.$watch(
      ()=>this.prenom+this.nom+this.fonction+this.fix+this.mobile+this.imgType,
      function(nv,ov){
        this.signature = this.$el.querySelector("#result").innerHTML;
        this.copied = false;
      },
      { immediate: true }
    );
  }
})


