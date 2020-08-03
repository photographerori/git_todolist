var app = new Vue({
  el: "#app",
  data: {
    message: "",
    todos: [],
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

      this.message = "";
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
      console.log(index);
    },
  },
});
