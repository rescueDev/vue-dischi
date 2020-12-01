//Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

//salvo l'indirizzo dell' API in una costante in modo da richiamarla facilmente

const musicArray = "https://flynn.boolean.careers/exercises/api/array/music";

//inizializzo VUE
var app = new Vue({
  el: "#app",
  data: {
    arrayDischi: "",
    selected: "",
  },
  mounted: function () {
    axios.get(musicArray).then((response) => {
      //console.log(response);
      const risposta = response.data.response;
      console.log(risposta);
      this.arrayDischi = [...risposta];
      console.log(this.arrayDischi);
    });
  },
  methods: {
    filterDisco: function (disco) {
      if (disco.genre.toLowerCase().includes(this.selected.toLowerCase())) {
        return true;
      } else if (this.selected === "tutti") {
        return true;
      } else {
        return false;
      }
    },
  },
});
