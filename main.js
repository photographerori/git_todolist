var app = new Vue({
  el: "#app",
  data: {
    message: "",
    todos: [],
    actives: [],
    completeds: [],
    all: 0,
    active: 0,
    completed: 0
  },
  methods: {
    addItem: function () {
      // 空のinputタグの処理
      if (this.message === "") return;

      const todo = {
        item: this.message,
        isDone: false,
      };
      this.todos.push(todo);
      this.actives.push(todo)

      this.message = "";
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    }
  },
  computed: {
    countAll: function () {
      // console.log(this.todos.length)
      this.all = this.todos.length
    }
  }
});
