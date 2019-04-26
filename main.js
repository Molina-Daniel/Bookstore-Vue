

let myApp = new Vue({
  el: "#app",
  data: {
    url: "https://api.myjson.com/bins/1h3vb3"
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      fetch(this.url)
        .then(data => data.json())
        .then(json => console.log(json))
        .catch(error => alert(error));
    }
  }
})
